// Copyright 2024 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';

export function ProgressCircle({
  fractionComplete,
  width = 24,
  strokeWidth = 3,
  ariaLabel,
}: {
  fractionComplete: number;
  width?: number;
  strokeWidth?: number;
  ariaLabel?: string;
}): JSX.Element {
  const radius = width / 2 - strokeWidth / 2;
  const circumference = radius * 2 * Math.PI;
  const widthInPixels = `${width}px`;

  return (
    <svg
      className="ProgressCircle"
      width={widthInPixels}
      height={widthInPixels}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuenow={Math.trunc(fractionComplete * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <circle
        className="ProgressCircle__background"
        strokeWidth={strokeWidth}
        r={radius}
        cx="50%"
        cy="50%"
      />
      <circle
        className="ProgressCircle__fill"
        r={radius}
        cx="50%"
        cy="50%"
        strokeWidth={strokeWidth}
        // setting the strokeDashArray to be the circumference of the ring means each dash
        // will cover the whole ring
        strokeDasharray={circumference}
        // offsetting the dash as a fraction of the circumference allows showing the
        // progress
        strokeDashoffset={(1 - fractionComplete) * circumference}
      />
    </svg>
  );
}
