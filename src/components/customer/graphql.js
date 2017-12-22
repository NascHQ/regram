import gql from 'graphql-tag'

export const ADD_ORGANIZATION = gql`
    mutation createOrganization(
        $name: String!, 
        $description: String!,
        $email: String,
        $site: String,
        $address: String) {
        createOrganization(input: {
            organization: { 
                ownerId:1, 
                name: $name, 
                description: $description,
                email: $email,
                site: $site,
                address: $address,
                active: true
            }
        }) {
            organization {
                id
                name
                description
                active
            }
        }
    }
`
export const LIST_ORGANIZATION = gql`{
	allOrganizations(condition: {active: true}) {
	  edges {
	    node {
            id
            name
            description
            email
            site
            address
            active
	    }
	  }
	}
}`

export const UPDATE_ORGANIZATION = gql`
    mutation (
        $id: Int!,
        $name: String,
        $description: String,
        $email: String,
        $site: String
        $address: String) {
        updateOrganizationById(input: {
        id: $id
        organizationPatch: {
            name: $name,
            description: $description,
            email: $email,
            site: $site,
            address: $address,
            active: true
        }
        }) {
            organization {
                id
                name
                description
                email
                site
                address
                active
            }
        }
    }
`
export const REMOVE_ORGANIZATION = gql`
    mutation ($id: Int!, $active: Boolean) {
        updateOrganizationById(input: {
        id: $id
        organizationPatch: {
            active: $active
        }
        }) {
            organization {
                id
            }
        }
    }
`
