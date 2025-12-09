import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Introduction from '../../components/Introduction';
import Agenda from '../../components/Agenda';
import Speakers from '../../components/Speakers';
import TheEvent from '../../components/TheEvent';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';

export default function EventPage() {
  const router = useRouter();
  const { id } = router.query;
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchEventData = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        const response = await axios.get(`${apiUrl}/api/events/${id}`);
        setEventData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching event data:', err);
        setError('Failed to load event data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading event data...</div>
      </div>
    );
  }

  if (error || !eventData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">{error || 'Event not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero
        title={eventData.title}
        date={eventData.date}
        location={eventData.location}
        heroImage={eventData.heroImage}
      />
      <Introduction
        heading={eventData.introduction.heading}
        content={eventData.introduction.content}
      />
      <Agenda items={eventData.agenda} />
      <Speakers speakers={eventData.speakers} />
      <TheEvent 
        eventDetails={eventData.eventDetails} 
      />
      <FAQ items={eventData.faq} />
      <Footer />
    </div>
  );
}

