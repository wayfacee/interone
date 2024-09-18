import { Button } from 'antd';
import { useState, useEffect, useRef } from 'react';

export const Banner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messageRef = useRef(null);
  const messages = [
    'Скидка 20 % на все товары',
    'Бесплатная доставка на сумму более 50 долларов США',
  ];

  const handleSwitchMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log('Изменение в сообщении:', mutation);
      });
    });

    if (messageRef.current) {
      observer.observe(messageRef.current, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [messageRef]);

  return (
    <div className="w-full bg-blue-500 text-white text-center p-4">
      <p ref={messageRef}>{messages[currentMessageIndex]}</p>
      <Button
        type='primary'
        onClick={handleSwitchMessage}
        className="mt-2 px-4 py-2 bg-white text-blue-500 rounded"
      >
        Переключить сообщение
      </Button>
    </div>
  );
};