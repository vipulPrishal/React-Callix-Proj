'use client';

import * as React from 'react';
import { AspectRatio as AspectRatioPrimitive } from 'radix-ui';

function AspectRatio({ ...props }) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
