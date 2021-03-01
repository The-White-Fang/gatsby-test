import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import GravityForm from '../components/gatsby-gravity-form';

const IndexPage = () => {

	return (
		<Layout>
			<GravityForm formId='2'/>
		</Layout>
	)
}

export default IndexPage