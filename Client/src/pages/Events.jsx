import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import Header1 from '../components/header/Header1';
// import Footer from '../components/footer/Footer';
import './Events.css';

const EventsPage = () => {
  // Mock events data for Jamia
  const events = [
    {
      id: 1,
      title: 'Annual Alumni Reunion',
      date: '2023-10-15',
      time: '5:00 PM - 9:00 PM',
      location: 'Jamia Millia Islamia, New Delhi',
      description: 'Join us for our annual alumni reunion event at the campus. Connect with old friends, make new connections, and enjoy an evening of networking and reminiscing about your time at Jamia.',
      type: 'in-person',
      registrationRequired: true,
    },
    {
      id: 2,
      title: 'Career Development Webinar Series',
      date: '2023-09-28',
      time: '1:00 PM - 2:30 PM',
      location: 'Zoom',
      description: 'A virtual networking event featuring successful Jamia alumni from various industries. Learn from their experiences and participate in Q&A sessions to enhance your career prospects.',
      type: 'virtual',
      registrationRequired: true,
    },
    {
      id: 3,
      title: 'Entrepreneurship Workshop',
      date: '2023-11-05',
      time: '10:00 AM - 12:00 PM',
      location: 'Faculty of Engineering, Jamia Millia Islamia',
      description: 'A hands-on workshop focused on entrepreneurship skills and startup fundamentals. Learn how to transform your ideas into successful ventures from established Jamia entrepreneurs.',
      type: 'in-person',
      registrationRequired: true,
    },
    {
      id: 4,
      title: 'Jamia Community Service Day',
      date: '2023-10-21',
      time: '9:00 AM - 3:00 PM',
      location: 'Various locations in Delhi',
      description: 'Give back to the community alongside fellow Jamia alumni. Various volunteer opportunities available, from educational workshops to environmental initiatives around Delhi NCR.',
      type: 'in-person',
      registrationRequired: true,
    },
  ];

  const [filter, setFilter] = useState('all');
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);
  
  return (
    <div className="events-page">
      <Header1 />
      <div className="container">
        <div className="events-header">
          <div>
            <h1 className="page-title">Upcoming Events</h1>
            <p className="page-subtitle">
              Connect with fellow Jamia alumni at these upcoming events
            </p>
          </div>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
              onClick={() => setFilter('all')}
            >
              All Events
            </button>
            <button 
              className={`filter-btn ${filter === 'in-person' ? 'active' : ''}`} 
              onClick={() => setFilter('in-person')}
            >
              In-Person
            </button>
            <button 
              className={`filter-btn ${filter === 'virtual' ? 'active' : ''}`} 
              onClick={() => setFilter('virtual')}
            >
              Virtual
            </button>
          </div>
          
          <button className="calendar-btn">
            <Calendar className="calendar-icon" />
            Add to Calendar
          </button>
        </div>
        
        <div className="events-list">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className={`event-date ${event.type === 'virtual' ? 'virtual' : 'in-person'}`}>
                <div className="date-day">
                  {new Date(event.date).getDate()}
                </div>
                <div className="date-month">
                  {new Date(event.date).toLocaleString('default', { month: 'short' })}
                </div>
                <div className="date-year">
                  {new Date(event.date).getFullYear()}
                </div>
              </div>
              
              <div className="event-details">
                <div className="event-header">
                  <h3 className="event-title">{event.title}</h3>
                  <span className={`event-badge ${event.type}`}>
                    {event.type === 'virtual' ? 'Virtual' : 'In Person'}
                  </span>
                </div>
                
                <div className="event-info">
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                </div>
                
                <p className="event-description">{event.description}</p>
                
                <div className="event-actions">
                  <button className="register-btn">
                    Register Now
                  </button>
                  <button className="details-btn">
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="host-event-section">
          <h2>Host Your Own Alumni Event</h2>
          <p>
            Would you like to organize an event for Jamia alumni? We can help you connect with alumni in your area or industry and provide resources to make your event successful.
          </p>
          <button className="proposal-btn">Submit Event Proposal</button>
        </div>
      </div>
      
      <footer id="footer">
        <div class="container footer-bottom clearfix">
        <div class="copyright">
            &copy; Copyright <strong><span>Connect Jamia</span></strong>. All Rights Reserved
        </div>
        
        </div>
       </footer>
    </div>
  );
};

export default EventsPage;