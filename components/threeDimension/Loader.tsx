import { Html, useProgress } from "@react-three/drei";
import { MainContainer } from "components/container/MainContainer";
import { Title } from "components/typography/Typography";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

export function Loader() {
  const [prog, setProg] = useState(0);

  useInterval(
    () => {
      setProg(prog + 0.1);
    },
    prog >= 90 ? null : prog >= 50 ? 200 : 10
  );

  const { progress } = useProgress();

  const maxProg = Math.max(progress, prog);
  return (
    <Html center>
      <MainContainer className="h-screen w-screen">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Title as="h2" color="white">
            Loading {maxProg.toFixed(1)}%
          </Title>
        </div>
      </MainContainer>
    </Html>
  );
}
