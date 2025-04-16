"use client";
import { TextGenerateEffect } from "../components/ui/Text-Generate";

const words = ` Below is the detailed information about your cab ride.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
