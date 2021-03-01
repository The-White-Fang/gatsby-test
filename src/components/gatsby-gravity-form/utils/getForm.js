import { useStaticQuery, graphql } from 'gatsby';

const GetForm = formId => {
	const data = useStaticQuery(
		graphql`
			query {
				allGfForm {
					edges {
						node {
							button {
								imageUrl
								text
								type
							}
							description
							formFields {
								basePrice
								calculationFormula
								calculationRounding
								choices
								conditionalLogic
								content
								defaultValue
								description
								descriptionPlacement
								displayOnly
								enablePasswordInput
								errorMessage
								fields
								formId
								gf_live_validation_format
								gf_live_validation_format_based
								gf_live_validation_settings
								id
								inputMask
								inputMaskIsCustom
								inputMaskValue
								inputName
								inputType
								isRequired
								label
								maxLength
								pageNumber
								type
								enableOtherChoice
							}
							formId
						}
					}
				}
			}
		`
	);

	for (let edge of data.allGfForm.edges) {
		if (edge.node.formId == formId) {
			return edge.node;
		}
	}
}

export default GetForm;