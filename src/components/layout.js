/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Markup } from 'interweave';


import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			wpPage(id: {eq: "cG9zdDoxMDg1NQ=="}) {
				content
			}
		}
	`);

	return (
		<>
			<Header siteTitle={`Page`} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`,
				}}
			>
				<Markup content={data.wpPage.content} />
				<footer
					style={{
						marginTop: `2rem`,
					}}
				>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</footer>
			</div>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
