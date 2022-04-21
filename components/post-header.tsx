import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage}/>
      </div>

      <div className="text-right">
        <DateFormatter dateString={date}/>
      </div>
    </>
  );
};

export default PostHeader;
