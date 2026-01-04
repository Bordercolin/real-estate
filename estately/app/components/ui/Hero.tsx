import React from "react";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <Container>
      <h1>Real Estate for living and investing</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 bg-red-500">
          takes up 2/3 of the width
        </div>
        <div className="md:col-span-1 bg-blue-500">
          takes up 1/3 of the width
        </div>
      </div>
    </Container>
  );
}
