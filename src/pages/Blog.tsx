import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  const categories = ["All", "Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Data Science", "Mobile Development", "Digital Strategy"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-primary to-surface-secondary">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Tech <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Stay updated with the latest trends, best practices, and insights from the world of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-surface-primary border-b border-surface-tertiary">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-brand-blue text-white" 
                    : "bg-surface-secondary text-text-secondary hover:bg-surface-tertiary hover:text-text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-surface-primary">
        <div className="container-max section-padding">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"></div>
          </div>
          
          <div className="card overflow-hidden hover:scale-105 transition-transform duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src="/api/placeholder/600/400" 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-text-muted mb-4">
                  <span>{blogPosts[0].author}</span>
                  <span>•</span>
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <Link 
                  to={`/blog/${blogPosts[0].id}`}
                  className="btn-primary w-fit"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-surface-secondary">
        <div className="container-max section-padding">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Latest Articles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="card overflow-hidden hover:scale-105 transition-transform duration-200">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-text-muted mb-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3 hover:text-brand-blue transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-brand-blue font-medium text-sm hover:text-brand-purple transition-colors flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-purple">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;