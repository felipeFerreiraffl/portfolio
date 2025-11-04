/* ---------- Funções - GSAP ---------- */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Configuração do GSAP
export function useGSAPConfigs(ref, setProps = {}, toProps = {}) {
  if (ref.current) {
    gsap.set(ref.current, { ...setProps });
    gsap.to(ref.current, { ...toProps });
  }
}

// Configuração do timeline do GSAP
export function useGSAPTimeline(
  timeline,
  refs = [],
  fromProps = {},
  toProps = {},
  delay
) {
  useGSAP(
    () => {
      timeline.current = gsap.timeline({ paused: true });
      
      refs.current.forEach((ring, i) => {
        timeline.current.fromTo(
          ring,
          { ...fromProps },
          { ...toProps },
          i * delay
        );
      });
    },
    { scope: refs }
  );
}

export function useGSAPFromTo(ref, fromProps = {}, toProps = {}) {
  gsap.fromTo(ref.current, { ...fromProps }, { ...toProps });
}
