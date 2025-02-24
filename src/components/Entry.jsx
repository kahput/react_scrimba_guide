import PropTypes from "prop-types"
import './Entry.css'

// Simple SVG icons as components
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M20 21a8 8 0 1 0-16 0" />
  </svg>
);

// Helper function to format relative time
const getRelativeTimeString = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffTime = now - past;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffTime / (1000 * 60));

  if (diffDays > 30) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  }
  if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  }
  return 'just now';
};

function Entry({ post }) {
  return (
    <article className="entry-card">
      <div className="entry-image-container">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="entry-image"
        />
      </div>

      <div className="entry-header">
        <div className="entry-tags">
          {post.tags.map(tag => (
            <span key={tag} className="entry-tag">{tag}</span>
          ))}
        </div>
        <h2 className="entry-title">{post.title}</h2>
      </div>

      <div className="entry-content">
        <p className="entry-description">
          {post.description}
        </p>
      </div>

      <div className="entry-footer">
        <div className="entry-meta">
          <div className="entry-meta-item">
            <UserIcon />
            {post.author}
          </div>
          <div className="entry-meta-item">
            <ClockIcon />
            {post.readTime}
          </div>
        </div>
        <div>{getRelativeTimeString(post.date)}</div>
      </div>
    </article>
  );
}

Entry.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    author: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Entry;
