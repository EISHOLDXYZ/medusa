/**
 * @schema StoreCustomer
 * type: object
 * description: The customer's details.
 * x-schemaName: StoreCustomer
 * required:
 *   - id
 *   - email
 *   - default_billing_address_id
 *   - default_shipping_address_id
 *   - company_name
 *   - first_name
 *   - last_name
 *   - addresses
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The customer's ID.
 *   email:
 *     type: string
 *     title: email
 *     description: The customer's email.
 *     format: email
 *   default_billing_address_id:
 *     type: string
 *     title: default_billing_address_id
 *     description: The customer's default billing address id.
 *   default_shipping_address_id:
 *     type: string
 *     title: default_shipping_address_id
 *     description: The customer's default shipping address id.
 *   company_name:
 *     type: string
 *     title: company_name
 *     description: The customer's company name.
 *   first_name:
 *     type: string
 *     title: first_name
 *     description: The customer's first name.
 *   last_name:
 *     type: string
 *     title: last_name
 *     description: The customer's last name.
 *   addresses:
 *     type: array
 *     description: The customer's addresses.
 *     items:
 *       $ref: "#/components/schemas/BaseCustomerAddress"
 *   phone:
 *     type: string
 *     title: phone
 *     description: The customer's phone.
 *   metadata:
 *     type: object
 *     description: The customer's metadata.
 *   created_by:
 *     type: string
 *     title: created_by
 *     description: The customer's created by.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The customer's deleted at.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The customer's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The customer's updated at.
 * 
*/

