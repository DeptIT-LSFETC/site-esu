"use client";
import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import VisibilitySensor from 'react-visibility-sensor';
import Head from 'next/head';

const CountUp = dynamic(() => import('react-countup'));

interface Statistic {
  label: string;
  value: number;
}

const Statistics: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const statisticsData: Statistic[] = [
    { label: 'de participanți', value: 395 },
    { label: 'licee', value: 37 },
    { label: 'ediții', value: 7 },
    { label: 'premii câștigate', value: 3 },
    { label: '% participanți mulțumiți', value: 100 },
  ];

  const handleVisibilityChange = (visible: boolean) => {
    setIsVisible(visible);
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility={true}>
      <div className="bg-primary-700 rounded-xl py-10">
        <Head>
          <title>Statistics</title>
        </Head>
        <h2 className="text-center text-text-100 text-5xl pb-5 font-semibold">ESU în numere</h2>
        <div className="flex flex-col lg:flex-row w-full justify-around gap-4 px-10">
          {statisticsData.map((stat, index) => (
            <div key={index} className="text-center rounded-xl p-4 bg-accent-300 min-w-[20%] min-h-32 flex flex-col justify-center items-center">
              <div className="text-4xl text-text-50 font-semibold">
                <CountUp end={isVisible ? stat.value : 0} duration={4} />
              </div>
              <div className="text-3xl text-text-50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Statistics;
