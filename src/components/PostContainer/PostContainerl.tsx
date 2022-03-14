import { FC, useCallback, useState } from 'react'
import { IPost } from '../../models/IPost'
import { postAPI } from '../../services/PostService'
import PostItem from '../PostItem/PostItem'

const PostContainer: FC = () => {
  const [limit, setLimit] = useState<number>(10)
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postAPI.useCreatePostMutation({})
  const [removePost, {}] = postAPI.useDeletePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()

  const handleCreatePost = async () => {
    const title = prompt()
    await createPost({ title, body: title } as IPost)
  }

  const handleRemovePost = useCallback((post: IPost) => {
    removePost(post)
  }, [])

  const handleUpdatePost = useCallback((post: IPost) => {
    updatePost(post)
  }, [])

  return (
    <div>
      {isLoading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      {posts?.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          remove={handleRemovePost}
          update={handleUpdatePost}
        />
      ))}
      <button onClick={handleCreatePost}>Add new post</button>
    </div>
  )
}

export default PostContainer
