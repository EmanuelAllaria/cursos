import React, { useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import '../css/Store.css';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [initialOptions, setInitialOptions] = useState(null);

  useEffect(() => {
    fetchEvents();
    loadPayPalScript();
  }, []);

  const fetchEvents = () => {
    // Ejemplo de eventos obtenidos desde la API de calendario
    const mockEvents = [
      { date: '2023-06-01', title: 'Evento 1' },
      { date: '2023-06-05', title: 'Evento 2' },
      { date: '2023-06-10', title: 'Evento 3' },
    ];

    setEvents(mockEvents);
  };

  const loadPayPalScript = () => {
    const initialOptions = {
      "client-id": "AVG_TQ8HCE22pSFG4zS4kGoGCtVd91E2AQcsIOQhmK-OVCS-CunY33KW67HNHjoXn8qmuori6Mc98aEQ",
      currency: "USD",
      intent: "capture",
    };

    setInitialOptions(initialOptions);
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "50.00", // Precio del producto
          },
          description: `Pago por evento del día ${selectedDate}`,
        },
      ],
    });
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div id='calendar'>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Día</th>
            <th>Eventos</th>
            <th>Pagar</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.date}</td>
              <td>{event.title}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDateClick(event.date)}
                >
                  Pagar ahora
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDate && (
        <div id="paypal-button-container" className="mt-4">
          {initialOptions && selectedDate && (
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons createOrder={createOrder} />
            </PayPalScriptProvider>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendario;
