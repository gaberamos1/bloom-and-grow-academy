/*
SQUARESPACE WEBSITE SETUP GUIDE — BLOOM AND GROW ACADEMY

Recommended Squarespace Templates:
- Hester
- Waverly
- Paloma
- Brine

Brand Colors:
- Orange: #F26A3D
- Purple: #7A3EB1
- Soft Yellow: #FFF7EC
- Green Accent: #8BC34A
- Deep Charcoal: #1F2937

Recommended Pages:
1. Home
2. About Us
3. Programs
4. Curriculum
5. Parent Communication
6. Schedule a Tour
7. Contact

Homepage Section Order:
1. Hero Banner with Logo + CTA
2. About Bloom and Grow Academy
3. Curriculum Section
4. Programs Overview
5. Home Away From Home
6. Infant Program
7. Gallery
8. Brightwheel Communication System
9. Why Families Will Love Bloom and Grow
10. Schedule a Tour
11. Final CTA
12. Footer Contact Info

Squarespace Design Settings:
- Button Style: Rounded
- Site Width: Wide
- Fonts:
  Headings: Poppins Bold
  Body: Lato or Open Sans
- Animation: Fade In
- Border Radius: 24px

SEO Title:
Bloom and Grow Academy | Childcare & Early Learning in Orlando, FL

SEO Description:
Bloom and Grow Academy provides nurturing, high-quality childcare and early education programs in Orlando, Florida. Schedule a tour today.

Contact Information:
Bloom and Grow Academy
5029 Edgewater Dr
Orlando, FL 32810
Email: bloom.growacademy@gmail.com
Phone: 407-203-3985
*/

const programs = [
  {
    title: 'Infants',
    age: '3 Months – 15 Months',
    description:
      'A safe, loving, and nurturing environment where infants build trust, comfort, confidence, and developmental foundations through individualized care and meaningful interactions.',
  },
  {
    title: 'Toddler Program',
    age: '15 Months – 3 Years',
    description:
      'Hands-on learning, social development, and structured play that encourages curiosity, independence, and confidence.',
  },
  {
    title: 'Preschool',
    age: '3 – 5 Years',
    description:
      'Preparing children for kindergarten through creative learning, literacy, social-emotional growth, and interactive activities.',
  },
];

const curriculumFeatures = [
  'Daily and weekly lesson plans with clear objectives and assessment connections.',
  'Conscious Discipline integration with brain-compatible behavior strategies that reduce disruptions and build community.',
  'Embedded language, social-emotional development, and routines that strengthen core skills through repetition and extension.',
  'Multi-language materials designed for diverse classroom and family engagement.',
  'Head Start, QRIS, and Pre-K alignment with comprehensive documentation for compliance and reporting.',
  'Family engagement and coaching tools that extend learning beyond the classroom through consistent messaging.',
];

const highlights = [
  {
    title: 'Opening Soon in Orlando',
    description:
      'Bloom and Grow Academy is preparing to welcome families into a warm, nurturing, and educational environment designed for early childhood success.',
  },
  {
    title: 'Inclusive Learning Environment',
    description:
      'We proudly celebrate diversity with families and staff representing 12 different countries, helping children develop respect and appreciation for others.',
  },
  {
    title: 'Research-Based Curriculum',
    description:
      'Our Frog Street curriculum and Conscious Discipline approach provide engaging, developmentally appropriate experiences that support lifelong learning.',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
];

function validateWebsiteContent() {
  return (
    programs.length === 3 &&
    curriculumFeatures.length === 6 &&
    highlights.length === 3 &&
    galleryImages.length === 3 &&
    programs.some((program) => program.title === 'Infants')
  );
}

console.assert(validateWebsiteContent(), 'Bloom and Grow website content validation failed.');

export default function BloomAndGrowWebsite() {
  return (
    <div className="min-h-screen bg-[#f8faf7] text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-yellow-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#7A3EB1] font-semibold mb-4">
              Welcome to Bloom and Grow Academy
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Helping Little Minds Bloom and Grow
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Providing the highest quality childcare program in Orlando, Florida, where children feel safe, supported, celebrated, and excited to learn every day.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#F26A3D] hover:bg-[#dd5a31] transition text-white px-6 py-3 rounded-2xl shadow-lg font-medium">
                Schedule a Tour
              </button>
              <button className="border border-[#7A3EB1] text-[#7A3EB1] hover:bg-purple-50 transition px-6 py-3 rounded-2xl font-medium">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[2rem] shadow-2xl p-4 rotate-2">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt="Children learning together"
                className="rounded-[1.5rem] h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
              alt="Teacher with children"
              className="rounded-[2rem] shadow-xl w-full h-[450px] object-cover"
            />
          </div>

          <div>
            <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-4xl font-bold mb-6">
              A Place Where Children Thrive
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-lg">
              At Bloom and Grow Academy, we believe that every child progresses individually through the stages of physical, social, emotional, and intellectual development. Growth is nurtured through meaningful relationships between children, their families, and our trained caregivers.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              With an open-door policy, we proudly celebrate diversity, with families and staff representing 12 different countries. Our inclusive environment encourages children to learn, grow, and thrive while developing respect and appreciation for others.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-6 bg-[#fff7ec]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
              Our Curriculum
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Research-Based Learning for Every Child
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
              Our certified teachers use the latest research in child development to offer current practices in early education. Our curriculum is designed for consistency, clarity, and instructional strength. Frog Street programs are built for ease of use, alignment to standards, and daily fidelity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {curriculumFeatures.map((item) => (
              <div
                key={item}
                className="bg-white rounded-[2rem] p-6 shadow-md flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-[#F26A3D] text-white flex items-center justify-center font-bold shrink-0">
                  ✓
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
            Our Programs
          </p>
          <h2 className="text-4xl font-bold mb-14">
            Learning Programs for Every Stage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-[#f8faf7] rounded-[2rem] p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6 mx-auto">
                  🌱
                </div>
                <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>
                <p className="text-[#F26A3D] font-medium mb-4">{program.age}</p>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Away From Home Section */}
      <section className="py-20 px-6 bg-[#fff7ec]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
              alt="Happy children at daycare"
              className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
              Home Away From Home
            </p>
            <h2 className="text-4xl font-bold mb-6">
              A Safe, Caring, and Comfortable Environment
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              At Bloom and Grow Academy, we understand the importance of creating a nurturing, safe, and comfortable environment where every child feels at home. Our goal is to provide a warm and caring atmosphere that supports your child’s growth, happiness, and well-being each day.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              We provide everything needed to help keep your child safe, comfortable, and cared for while they are with us. Our center proudly participates in the Child Food Program, where children receive nutritious breakfast, lunch, and snacks at no cost.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="font-semibold text-xl text-[#F26A3D] mb-2">
                  Nutritious Meals
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Healthy breakfast, lunch, and snacks are provided daily through our Child Food Program.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="font-semibold text-xl text-[#7A3EB1] mb-2">
                  Secure Facility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cameras located inside and outside our facility help us maintain a safe environment for every child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infant Program Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
              Infant Program
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Infants
            </h2>
            <p className="text-[#F26A3D] font-semibold text-xl mb-6">
              3 Months – 15 Months
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              At Bloom and Grow Academy, our Infant Program provides a safe, loving, and nurturing environment where your baby can grow emotionally, socially, and developmentally. We focus on building strong, trusting relationships so that every child feels secure, valued, and cared for each day.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              Through individualized attention and responsive caregiving, we support important early milestones such as motor development, communication, sensory exploration, and social interaction. Our gentle daily routines encourage curiosity, comfort, and confidence while meeting each infant’s unique needs and schedule.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              We believe that strong partnerships with parents are essential during these early stages of development. By working closely with families, we help create a smooth and joyful transition into early childhood while laying a strong foundation for lifelong learning.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our infant curriculum incorporates Frog Street’s Infant Joyful Beginnings program, which is designed to support intentional caregiving, meaningful interactions, sensory discovery, and emotionally supportive early language experiences. The program provides developmentally appropriate routines and activities that help infants learn and thrive in a structured, caring environment.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
              alt="Infant classroom"
              className="rounded-[2rem] shadow-2xl w-full h-[700px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
              Daily Moments
            </p>
            <h2 className="text-4xl font-bold">
              Life at Bloom and Grow Academy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <img
                key={image}
                src={image}
                alt="Bloom and Grow Academy daily classroom moment"
                className="rounded-[2rem] h-[350px] w-full object-cover shadow-lg hover:scale-[1.02] transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
              Our System
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Keeping Families Connected Every Day
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              We prioritize a collaborative working relationship with parents and keep families informed about their child’s growth and progress through Brightwheel.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              This online assessment and communication platform allows our teachers to easily gather, organize, and share information with families throughout the day, helping parents stay connected to their child’s learning experiences, daily activities, and developmental milestones.
            </p>
          </div>

          <div className="bg-[#fff7ec] rounded-[2rem] p-10 shadow-xl">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="font-semibold text-xl mb-2 text-[#F26A3D]">
                  Real-Time Updates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Parents receive updates throughout the day about meals, naps, activities, and classroom experiences.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="font-semibold text-xl mb-2 text-[#7A3EB1]">
                  Development Tracking
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Teachers document milestones and learning progress to help families stay involved in every stage of development.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <h3 className="font-semibold text-xl mb-2 text-green-600">
                  Family Communication
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Brightwheel creates seamless communication between teachers and families for a stronger learning partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Will Love Bloom and Grow */}
      <section className="py-20 px-6 bg-[#fff7ec]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
            Why Families Will Love Bloom and Grow
          </p>
          <h2 className="text-4xl font-bold mb-14">
            Built With Families in Mind
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[2rem] p-8 shadow-md text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F26A3D] text-white flex items-center justify-center text-2xl mb-6">
                  ✨
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#7A3EB1] font-semibold uppercase tracking-wider mb-3">
            Schedule a Tour
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Make Sure It’s the Right Fit Before You Commit
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto mb-6">
            At Bloom and Grow Academy, we believe in creating a welcoming community where every family feels valued and connected. From the moment you walk through our doors, we want you and your child to feel comfortable, supported, and at home.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto mb-10">
            We encourage families to reach out and schedule a tour to meet our team, explore our center, and learn more about our programs and daily activities. Choosing the right childcare provider is an important decision, and we are committed to helping parents feel confident and secure every step of the way.
          </p>

          <div className="bg-[#fff7ec] rounded-[2rem] p-10 shadow-xl max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-[#F26A3D]">
              A True Home Away From Home
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our goal is to provide a true “home away from home” where children can learn, grow, and thrive in a safe, loving, and nurturing environment.
            </p>

            <button className="bg-[#F26A3D] hover:bg-[#dd5a31] transition text-white px-8 py-4 rounded-2xl shadow-lg font-semibold text-lg">
              Schedule Your Tour Today
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#F26A3D] rounded-[2.5rem] text-white p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-5">
            Ready to Learn More About Bloom and Grow Academy?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about everything Bloom and Grow Academy has to offer and discover a nurturing environment where your child can learn, grow, and shine.
          </p>

          <button className="bg-white text-[#F26A3D] px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition shadow-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2937] text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Bloom and Grow Academy
            </h3>
            <p className="max-w-sm text-gray-400">
              Inspiring confidence, creativity, and a lifelong love of learning in every child.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p>5029 Edgewater Dr</p>
            <p>Orlando, FL 32810</p>
            <p>Email: bloom.growacademy@gmail.com</p>
            <p>Phone: 407-203-3985</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
