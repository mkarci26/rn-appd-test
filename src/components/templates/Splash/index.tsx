import React, { useEffect, useState } from 'react';

export enum PageName {
  HRA = 'HraSplashScreen',
  HA = 'HealthChecklistSplashScreen',
}

export enum ItemType {
  HRA,
  CONTENT,
  HEALTH_ACTION,
}

export interface CardItem {
  cardId: number;
  type: ItemType;
  title: string;
  subTitle: string;
  imageUrl: string;
  hearts: number;
  progressValue: number | undefined;
}

interface SplashProps {
  page: PageName;
}

export const Splash = ({}: SplashProps) => {
 
  return (
    <>My Splash Screen</>
  );
};

Splash.defaultProps = {
  isClosable: true,
  heartsValue: undefined,
  bottomLink: undefined,
  handleComplete: undefined,
  handleExpandCollapse: undefined,
  isAnyContentCompleted: false,
};

export default Splash;
