import PropTypes from 'prop-types';
import React from 'react';
import { Button, EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStateSecondaryActions, Title, Spinner } from '@patternfly/react-core';
import { PlusCircleIcon, ExclamationCircleIcon } from '@patternfly/react-icons';

import DirectProviderLink from './DirectProviderLink';
import { imageProps } from '../../helpers.js';

const failedToFetchTitle = 'Failed to fetch available sources.';
const missingSourceTitle = 'No sources available';
const missingSourceDescription = (
  <>
    <p>There are no sources available for use with this image.</p>
    <p>Create a source, grant an existing source launch functionality,</p>
    <p>or launch directly from the cloud provider console.</p>
  </>
);
// TODO: enable once documentation is available.
// Learn more about launching images [external link icon].

const LoadingState = () => (
  <EmptyState>
    <EmptyStateIcon variant="container" component={Spinner} />
    <Title size="lg" headingLevel="h4">
      Loading available Sources
    </Title>
  </EmptyState>
);

const SourceMissing = ({ error, image }) => (
  <EmptyState>
    <EmptyStateIcon icon={error ? ExclamationCircleIcon : PlusCircleIcon} />
    <Title headingLevel="h4" size="lg">
      {(error && failedToFetchTitle) || missingSourceTitle}
    </Title>
    <EmptyStateBody>{error?.message || missingSourceDescription}</EmptyStateBody>
    <Button variant="primary" component="a" target="_blank" href="/preview/settings/sources/new">
      Create Source
    </Button>
    <EmptyStateSecondaryActions>
      <DirectProviderLink image={image} />
    </EmptyStateSecondaryActions>
  </EmptyState>
);

SourceMissing.propTypes = {
  error: PropTypes.string,
  image: imageProps,
};

const LoadingWrapper = ({ isLoading, ...props }) => (isLoading ? <LoadingState /> : <SourceMissing {...props} />);

LoadingWrapper.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  image: imageProps,
};

export default LoadingWrapper;
