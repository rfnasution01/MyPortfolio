"use client";

import { Figure } from "@/components/Figure";
import { Paragraph } from "@/components/Paragraph";
import { Section } from "@/components/Section";
import { H2, H5 } from "@/components/headings";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <html>
      <body>
        <Section>
          <Figure>
            <Image
              src="/server-error.png"
              alt="500 Server Error"
              width={300}
              height={300}
              style={{
                borderRadius: "10px",
                width: "500px",
              }}
            />
          </Figure>

          <Link href="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                backgroundColor: "#808080",
                padding: "8px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "opacity 0.3s ease",
                opacity: isHover ? "1" : "0.7",
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => reset()}
            >
              <Image
                src="/home.svg"
                alt="Back to home"
                width={20}
                height={20}
              />
              <H5
                style={{
                  color: isHover ? "#fffff0" : "#fff",
                }}
              >
                Try Again
              </H5>
            </div>
          </Link>
        </Section>
      </body>
    </html>
  );
}
