import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title:
      "The Future of Industrial Weighing: IoT Integration and Smart Analytics",
    excerpt:
      "Discover how Internet of Things (IoT) technology is revolutionizing industrial weighing systems, enabling real-time monitoring, predictive maintenance, and advanced analytics for improved operational efficiency.",
    category: "Technology Trends",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "Dr. Sarah Mitchell",
  };

  const blogPosts = [
    {
      title: "Cybersecurity Best Practices for Industrial Systems",
      excerpt:
        "Essential security measures to protect your industrial systems from cyber threats and ensure business continuity.",
      category: "Security",
      date: "March 10, 2024",
      readTime: "6 min read",
      author: "Michael Chen",
    },
    {
      title: "Choosing the Right Weighing Solution for Your Business",
      excerpt:
        "A comprehensive guide to selecting the perfect weighing equipment based on your industry requirements and operational needs.",
      category: "Buyer's Guide",
      date: "March 5, 2024",
      readTime: "10 min read",
      author: "Emily Rodriguez",
    },
    {
      title:
        "Case Study: Streamlining Warehouse Operations with Integrated Solutions",
      excerpt:
        "How XYZ Logistics improved efficiency by 40% using our integrated weighing and management systems.",
      category: "Case Study",
      date: "February 28, 2024",
      readTime: "7 min read",
      author: "John Anderson",
    },
    {
      title: "The Evolution of Point-of-Sale Technology",
      excerpt:
        "From traditional cash registers to modern Android-based POS systems: a journey through retail technology evolution.",
      category: "Technology Trends",
      date: "February 20, 2024",
      readTime: "5 min read",
      author: "Sarah Mitchell",
    },
    {
      title: "Compliance Standards in Industrial Weighing",
      excerpt:
        "Understanding the regulatory landscape and ensuring your weighing systems meet all necessary compliance requirements.",
      category: "Compliance",
      date: "February 15, 2024",
      readTime: "12 min read",
      author: "Michael Chen",
    },
    {
      title: "Mobile Integration in Modern Business Systems",
      excerpt:
        "How mobile technology is transforming business operations and what it means for your organization.",
      category: "Technology Trends",
      date: "February 10, 2024",
      readTime: "8 min read",
      author: "Emily Rodriguez",
    },
  ];

  const categories = [
    "All Posts",
    "Technology Trends",
    "Security",
    "Case Studies",
    "Buyer's Guides",
    "Compliance",
    "Industry Insights",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Stay updated with the latest industry trends, technology insights,
            and expert advice
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-200 min-h-64"></div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge>{featuredPost.category}</Badge>
                      <span className="text-sm text-gray-500">
                        {featuredPost.date}
                      </span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        By {featuredPost.author}
                      </div>
                      <Button>Read More</Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="mb-2">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <div>By {post.author}</div>
                      <div>{post.date}</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
