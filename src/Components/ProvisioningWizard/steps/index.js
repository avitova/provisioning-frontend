import React from 'react';
import SourceMissing from './SourceMissing';
import AccountCustomizations from './AccountCustomizations';
import ReviewDetails from './ReviewDetails';
import PublicKeys from './Pubkeys';
import FinishStep from './ReservationProgress';
import { humanizeProvider } from '../../Common/helpers';

const stringIds = {
  1: 'account',
  4: 'sshkey',
  5: 'review',
};

export const stepIdToString = (id) => stringIds[id];

const missingSource = ({ image, isLoading, sourcesError }) => [
  {
    name: 'Define source',
    id: 1,
    component: <SourceMissing image={image} isLoading={isLoading} error={sourcesError} />,
    isFinishedStep: true,
  },
];

const wizardSteps = ({ stepIdReached, image, stepValidation, setStepValidation, setLaunchSuccess }) => [
  {
    name: 'Account and customization',
    steps: [
      {
        name: humanizeProvider(image.provider),
        id: 1,
        enableNext: stepValidation.awsStep,
        component: (
          <AccountCustomizations image={image} setStepValidated={(validated) => setStepValidation((prev) => ({ ...prev, awsStep: validated }))} />
        ),
        canJumpTo: stepIdReached >= 1,
      },
    ],
  },
  {
    name: 'SSH key authentication',
    id: 4,
    component: <PublicKeys setStepValidated={(validated) => setStepValidation((prev) => ({ ...prev, sshStep: validated }))} />,
    canJumpTo: stepIdReached >= 4,
    enableNext: stepValidation.sshStep,
  },
  {
    name: 'Review details',
    id: 5,
    component: <ReviewDetails imageName={image.name} />,
    canJumpTo: stepIdReached >= 5,
    nextButtonText: 'Launch',
  },
  {
    name: 'Finish Progress',
    id: 6,
    component: <FinishStep setLaunchSuccess={() => setLaunchSuccess(true)} imageID={image.id} />,
    isFinishedStep: true,
  },
];

const steps = (props) => (props.availableSources.length > 0 ? wizardSteps(props) : missingSource(props));

export default steps;
