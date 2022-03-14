import { FC, MouseEvent, memo} from 'react'
import { IPost } from '../../models/IPost'

interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    remove(post)
  }

  const handleUpdate = (e: MouseEvent<HTMLDivElement>) => {
    const title = prompt() || ''
    update({ ...post, title } as IPost)
    console.log(post.id)
  }

  return (
    <div onClick={handleUpdate}>
      {post.id} {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default memo(PostItem)