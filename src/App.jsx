import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";

const flowers = [
  {
    name: "Rose Elegance",
    description: "Classic red roses arranged with eucalyptus and satin ribbon.",
    price: "₹1,499",
    tag: "Best Seller",
    idealFor: "Ideal for anniversaries and romantic surprises",
  },
  {
    name: "Sunshine Bouquet",
    description: "Bright sunflowers and daisies to light up any celebration.",
    price: "₹1,199",
    tag: "Birthday",
    idealFor: "Ideal for birthdays and congratulations",
  },
  {
    name: "Pastel Dream",
    description: "Soft lilies, carnations, and baby breath in pastel tones.",
    price: "₹1,699",
    tag: "Anniversary",
    idealFor: "Ideal for milestone moments and elegant gifting",
  },
  {
    name: "Orchid Luxe",
    description: "Premium orchid stems in a modern minimalist wrapping.",
    price: "₹2,499",
    tag: "Premium",
    idealFor: "Ideal for corporate gifting and premium events",
  },
  {
    name: "White Serenity",
    description: "White roses and lilies for elegant, peaceful occasions.",
    price: "₹1,899",
    tag: "Sympathy",
    idealFor: "Ideal for sympathy and peaceful ceremonial decor",
  },
  {
    name: "Lavender Bloom",
    description: "Lavender mix bouquet with seasonal fillers and greens.",
    price: "₹1,399",
    tag: "New",
    idealFor: "Ideal for friendship, gratitude, and housewarmings",
  },
];

const services = [
  "Same-day delivery in selected city zones",
  "Wedding and event floral decoration",
  "Custom bouquet design with your color theme",
  "Monthly flower subscription for homes and offices",
];

const testimonials = [
  {
    name: "Neha Sharma",
    review:
      "The bouquet looked exactly like the photos and arrived on time. Fresh flowers and beautiful wrapping!",
  },
  {
    name: "Aarav Mehta",
    review:
      "I ordered for my parents' anniversary and they loved it. The handwritten note option was a lovely touch.",
  },
  {
    name: "Riya Kapoor",
    review:
      "Excellent customer service and elegant flower combinations. Definitely ordering again.",
  },
];

const occasions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Baby Shower",
  "Housewarming",
  "Corporate Events",
  "Get Well Soon",
  "Festival Gifts",
];

const valuePoints = [
  {
    title: "Farm-Fresh Sourcing",
    text: "We source flowers every morning from trusted growers to ensure long-lasting freshness.",
  },
  {
    title: "Handcrafted Designs",
    text: "Every bouquet is arranged by trained florists based on color harmony and flower longevity.",
  },
  {
    title: "Transparent Pricing",
    text: "Clear pricing, no hidden delivery charges, and flexible upgrades for premium wrapping.",
  },
  {
    title: "Reliable Support",
    text: "Our team assists with urgent deliveries, event planning, and personalized recommendations.",
  },
];

const processSteps = [
  "Tell us your occasion, preferred flowers, budget, and delivery date.",
  "Our florist shares curated design options and confirms your final selection.",
  "We handcraft your arrangement and share preparation updates before dispatch.",
  "Fresh bouquet gets delivered safely with your custom message card.",
];

const servicePlans = [
  {
    name: "Classic Plan",
    details: "4 bouquets/month, doorstep delivery, and care guide.",
    price: "₹3,999 / month",
  },
  {
    name: "Premium Plan",
    details: "6 premium bouquets, priority support, and decor consult call.",
    price: "₹6,999 / month",
  },
  {
    name: "Event Plan",
    details: "Custom package for weddings, launches, and private events.",
    price: "Starts at ₹14,999",
  },
];

const flowerCareTips = [
  "Trim stems at a 45° angle every 2 days for better water intake.",
  "Replace vase water daily and keep leaves below water line.",
  "Place flowers away from direct heat, sunlight, and fruits.",
  "Use flower food sachets to extend bloom life by 2-4 days.",
];

const deliveryZones = [
  "Green Park",
  "Hauz Khas",
  "Saket",
  "South Extension",
  "Lajpat Nagar",
  "Greater Kailash",
  "Nehru Place",
  "Vasant Kunj",
];

const addOnGifts = [
  { name: "Luxury Chocolate Box", price: "₹499" },
  { name: "Personalized Greeting Card", price: "₹149" },
  { name: "Scented Candle Set", price: "₹399" },
  { name: "Soft Teddy", price: "₹549" },
];

const teamMembers = [
  {
    name: "Ananya Verma",
    role: "Lead Floral Designer",
    detail: "Specialist in wedding palettes and signature bouquet styling.",
  },
  {
    name: "Rohan Batra",
    role: "Operations Manager",
    detail: "Ensures freshness logistics and same-day dispatch coordination.",
  },
  {
    name: "Meera Sethi",
    role: "Customer Experience",
    detail: "Helps customers with custom orders and gifting recommendations.",
  },
];

const policyPoints = [
  "Order edits are allowed up to 2 hours before dispatch time.",
  "For perishable products, cancellation is not supported after dispatch.",
  "If a flower is unavailable, we replace with equal or higher value blooms.",
  "For event bookings, 30% advance confirms the slot and preparation.",
];

function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="logo">🌸</span>
        <span>Petal & Bloom</span>
      </div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/flowers">Flowers</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Fresh Flowers Delivered Daily</p>
          <h1>Your Local Flower Shop for Every Special Moment</h1>
          <p>
            Discover hand-crafted bouquets, premium floral boxes, and thoughtful
            gifts made with love by expert florists.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/flowers">
              Shop Flowers
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Book Custom Order
            </Link>
          </div>
        </div>
        <aside className="hero-card">
          <h3>Today’s Offer</h3>
          <p>
            Get <strong>15% OFF</strong> on your first bouquet order above ₹1,500.
          </p>
          <p className="small-text">Use code: BLOOM15</p>
        </aside>
      </section>

      <section className="section">
        <h2>Highlights</h2>
        <div className="stats-grid">
          <article className="stat-card">
            <h3>8,000+</h3>
            <p>Happy Customers</p>
          </article>
          <article className="stat-card">
            <h3>120+</h3>
            <p>Bouquet Designs</p>
          </article>
          <article className="stat-card">
            <h3>4.9 / 5</h3>
            <p>Average Rating</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Why Customers Choose Us</h2>
        <div className="info-grid">
          {valuePoints.map((item) => (
            <article className="detail-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Occasions We Cover</h2>
        <p>
          From intimate celebrations to grand events, we design flowers for all
          important life moments.
        </p>
        <div className="chip-list">
          {occasions.map((occasion) => (
            <span className="chip" key={occasion}>
              {occasion}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Best-Selling Picks</h2>
        <div className="compact-grid">
          {flowers.slice(0, 3).map((flower) => (
            <article className="compact-card" key={flower.name}>
              <h3>{flower.name}</h3>
              <p>{flower.description}</p>
              <strong>{flower.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="section">
        <h2>About Us</h2>
        <p>
          At Petal & Bloom, we believe flowers speak the language of emotions.
          Since 2018, we have been helping customers celebrate birthdays,
          anniversaries, weddings, and life’s precious moments with fresh,
          beautiful floral arrangements.
        </p>
        <p>
          Our florists source premium blooms every morning, design every
          bouquet by hand, and deliver with care to make your moments truly
          unforgettable.
        </p>
        <div className="stats-grid">
          <article className="stat-card">
            <h3>7+</h3>
            <p>Years in Business</p>
          </article>
          <article className="stat-card">
            <h3>25+</h3>
            <p>Expert Florists</p>
          </article>
          <article className="stat-card">
            <h3>Same Day</h3>
            <p>Delivery Support</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Our Mission & Values</h2>
        <div className="info-grid">
          <article className="detail-card">
            <h3>Mission</h3>
            <p>
              To make meaningful gifting simple through high-quality, fresh, and
              thoughtfully designed flower arrangements.
            </p>
          </article>
          <article className="detail-card">
            <h3>Quality Promise</h3>
            <p>
              Every order goes through a freshness checklist and visual quality
              check before dispatch.
            </p>
          </article>
          <article className="detail-card">
            <h3>Customer First</h3>
            <p>
              We provide flexible substitutions, priority updates, and dedicated
              support for urgent requests.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Our Journey</h2>
        <div className="steps-grid">
          <article className="step-card">
            <h3>2018</h3>
            <p>Started as a neighborhood flower studio with custom bouquets.</p>
          </article>
          <article className="step-card">
            <h3>2021</h3>
            <p>Expanded into event decor and city-wide same-day delivery.</p>
          </article>
          <article className="step-card">
            <h3>2024</h3>
            <p>Launched subscription plans for homes, offices, and hotels.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Meet Our Team</h2>
        <div className="info-grid">
          {teamMembers.map((member) => (
            <article className="detail-card" key={member.name}>
              <h3>{member.name}</h3>
              <p className="small-text">{member.role}</p>
              <p>{member.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Sustainability Promise</h2>
        <ul className="services-list">
          <li>Biodegradable wrapping options available on all bouquet orders.</li>
          <li>Minimal-plastic packaging approach for retail and subscriptions.</li>
          <li>Local sourcing partnerships to reduce transport emissions.</li>
          <li>Compost-ready floral waste management in our studio operations.</li>
        </ul>
      </section>
    </>
  );
}

function FlowersPage() {
  return (
    <>
      <section className="section">
        <div className="section-head">
          <h2>Our Flowers</h2>
          <p>Choose from our most-loved floral collections.</p>
        </div>
        <div className="flowers-grid">
          {flowers.map((flower) => (
            <article className="flower-card" key={flower.name}>
              <span className="tag">{flower.tag}</span>
              <h3>{flower.name}</h3>
              <p>{flower.description}</p>
              <p className="small-text">{flower.idealFor}</p>
              <div className="price-row">
                <strong>{flower.price}</strong>
                <button type="button">Add to Cart</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Flower Care Guide</h2>
        <ul className="services-list">
          {flowerCareTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Popular Floral Themes</h2>
        <div className="chip-list">
          <span className="chip">Romantic Reds</span>
          <span className="chip">Pastel Elegance</span>
          <span className="chip">Sunshine Bright</span>
          <span className="chip">Classic White</span>
          <span className="chip">Luxury Orchids</span>
          <span className="chip">Seasonal Specials</span>
        </div>
      </section>

      <section className="section">
        <h2>Add-On Gifts</h2>
        <div className="compact-grid">
          {addOnGifts.map((gift) => (
            <article className="compact-card" key={gift.name}>
              <h3>{gift.name}</h3>
              <strong>{gift.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Delivery Zones</h2>
        <p>We currently provide same-day delivery in these city areas.</p>
        <div className="chip-list">
          {deliveryZones.map((zone) => (
            <span className="chip" key={zone}>
              {zone}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="section">
        <h2>Services</h2>
        <ul className="services-list">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>How Custom Orders Work</h2>
        <div className="steps-grid">
          {processSteps.map((step) => (
            <article className="step-card" key={step}>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Subscription & Event Packages</h2>
        <div className="plans-grid">
          {servicePlans.map((plan) => (
            <article className="plan-card" key={plan.name}>
              <h3>{plan.name}</h3>
              <p>{plan.details}</p>
              <strong>{plan.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>What’s Included in Every Order</h2>
        <div className="compact-grid">
          <article className="compact-card">
            <h3>Freshness Check</h3>
            <p>Multi-point quality check before arrangement and packing.</p>
          </article>
          <article className="compact-card">
            <h3>Care Instructions</h3>
            <p>Simple care card included to maximize bloom life at home.</p>
          </article>
          <article className="compact-card">
            <h3>Message Card</h3>
            <p>Complimentary note card with your personalized message.</p>
          </article>
        </div>
      </section>

      <section className="section faq">
        <h2>Frequently Asked Questions</h2>
        <article>
          <h3>Do you offer same-day delivery?</h3>
          <p>
            Yes, same-day delivery is available for orders placed before 4 PM in
            selected areas.
          </p>
        </article>
        <article>
          <h3>Can I customize my bouquet?</h3>
          <p>
            Absolutely. Share your preferred flowers, colors, and budget, and
            our florists will create a custom arrangement.
          </p>
        </article>
        <article>
          <h3>How do I care for fresh flowers?</h3>
          <p>
            Keep stems in clean water, trim them every 2 days, and avoid direct
            sunlight to increase freshness.
          </p>
        </article>
      </section>

      <section className="section">
        <h2>What Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p>“{item.review}”</p>
              <h3>— {item.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Booking & Cancellation Policy</h2>
        <ul className="services-list">
          {policyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="section contact">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <article className="contact-card">
            <h3>Store Details</h3>
            <p>
              📍 24 Blossom Street, Green Park, New Delhi <br />
              📞 +91 98765 43210 <br />
              ✉️ hello@petalandbloom.com
            </p>
            <a className="btn btn-primary" href="mailto:hello@petalandbloom.com">
              Send an Email
            </a>
          </article>

          <article className="contact-card">
            <h3>Business Hours</h3>
            <div className="hours-grid">
              <p>Mon - Fri</p>
              <p>9:00 AM - 8:00 PM</p>
              <p>Saturday</p>
              <p>9:00 AM - 9:00 PM</p>
              <p>Sunday</p>
              <p>10:00 AM - 6:00 PM</p>
            </div>
            <p className="small-text">Same-day delivery cutoff: 4:00 PM</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Quick Inquiry</h2>
        <form className="contact-form">
          <div className="form-grid">
            <label className="form-field">
              Full Name
              <input type="text" placeholder="Enter your name" />
            </label>
            <label className="form-field">
              Phone Number
              <input type="tel" placeholder="Enter your phone" />
            </label>
          </div>
          <label className="form-field">
            Occasion
            <input type="text" placeholder="Birthday, wedding, anniversary..." />
          </label>
          <label className="form-field">
            Message
            <textarea rows="4" placeholder="Tell us your flower preferences and budget" />
          </label>
          <button type="button" className="btn btn-primary">
            Submit Inquiry
          </button>
        </form>
      </section>

      <section className="section">
        <h2>Need Immediate Help?</h2>
        <div className="compact-grid">
          <article className="compact-card">
            <h3>Urgent Delivery Desk</h3>
            <p>Call us for fast assistance on same-day surprise deliveries.</p>
            <strong>+91 98765 43210</strong>
          </article>
          <article className="compact-card">
            <h3>Event Consultation</h3>
            <p>Get a free 20-minute consultation for weddings and events.</p>
            <strong>events@petalandbloom.com</strong>
          </article>
          <article className="compact-card">
            <h3>Corporate Orders</h3>
            <p>Monthly office floral plans and bulk gifting support available.</p>
            <strong>business@petalandbloom.com</strong>
          </article>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/flowers" element={<FlowersPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Petal & Bloom. Crafted with flowers and care.</p>
      </footer>
    </div>
  );
}

export default App;