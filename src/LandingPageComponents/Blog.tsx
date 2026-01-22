import { ArrowUpRight } from 'lucide-react';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      date: "November 21, 2022",
      author: "Tom Block",
      title: "Plan Your Project with Your Software",
      excerpt: "It is a time tracking solution that helps employees track hours across multiple tasks and projects software.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
      id: 2,
      date: "November 21, 2022",
      author: "Tom Block",
      title: "You have a Great Business Idea?",
      excerpt: "It is a time tracking solution that helps employees track hours across multiple tasks and projects software.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
    },
    {
      id: 3,
      date: "November 21, 2022",
      author: "Tom Block",
      title: "Building Data Analytics Software",
      excerpt: "It is a time tracking solution that helps employees track hours across multiple tasks and projects software.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
    }
  ];

  return (
    <div className=' bg-white'>
      <div className="pt-24 pb-12 md:py-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 md:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <span className="text-purple-600 font-semibold text-sm  tracking-wider mb-4">
                OUR LATEST BLOG
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4">
              Our Latest Experience
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully
              tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.
            </p>
          </div>


        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Post Meta */}
              <div className="mb-3">
                <span className="text-orange-500 text-sm font-medium">
                  {post.date} - {post.author}
                </span>
              </div>

              {/* Post Title */}
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                {post.title}
              </h3>

              {/* Post Excerpt */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <button className="flex items-center gap-2 text-gray-900 font-semibold text-sm hover:text-orange-500 hover:gap-3 transition-all duration-300">
                Read More
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;