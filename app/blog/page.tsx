import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Clean Air Blog & Resources | AirVita",
  description:
    "Discover comprehensive guides, research, and resources about air pollution, health protection, and clean air solutions. Download our free eBook on air pollution.",
  keywords: "air pollution, health guide, clean air, air quality, pollution protection, health resources",
}

export default function BlogPage() {
  return <BlogClientPage />
}
