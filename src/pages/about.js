import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1>About Ali</h1>
      <p>About page, This is sample site ,developed by Ali with gatsby</p>
      <p>About Blaa blaa blaaaaaaa.</p>
      <p>sir when will you start "ANGULAR"</p>
    </div>
  </Layout>
)

export default AboutPage
