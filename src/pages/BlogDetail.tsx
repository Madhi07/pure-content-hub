import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../data/blogPosts";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-4">Post Not Found</h1>
            <p className="text-text-secondary mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="py-6 bg-surface-secondary border-b border-surface-tertiary">
        <div className="container-max section-padding">
          <nav className="flex text-sm text-text-muted">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-brand-blue transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text-secondary">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-surface-primary">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-text-muted mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-surface-primary">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, '<h2 class="text-2xl font-bold text-text-primary mt-8 mb-4">').replace(/<h2[^>]*>/g, '<h2 class="text-2xl font-bold text-text-primary mt-8 mb-4">') 
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-surface-secondary">
          <div className="container-max section-padding">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="card overflow-hidden hover:scale-105 transition-transform duration-200">
                    <div className="relative h-48">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 text-xs text-text-muted mb-3">
                        <span>{relatedPost.author}</span>
                        <span>•</span>
                        <span>{relatedPost.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary mb-3 hover:text-brand-blue transition-colors">
                        <Link to={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {relatedPost.excerpt.substring(0, 120)}...
                      </p>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
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
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-purple">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Expert Help?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to implement these insights in your business? Our experts are here to help.
          </p>
          <Link to="/contact" className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Get Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;