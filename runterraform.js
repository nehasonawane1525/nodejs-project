// code is not completed

const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config();


const terraformConfig = `
provider "aws" {
  region = "ap-southeast-1"
  access_key = "${process.env.AWS_ACCESS_KEY}"
  secret_key = "${process.env.AWS_SECRET_KEY}"
}

resource "aws_s3_bucket" "example_bucket" {
  bucket = "my-s3-bucket-from-terraform-script-executed-by-node-js"
  tags = {
     Name  = "my-s3-bucket-from-terraform-script-executed-by-node-js"
  }
}
`;


// Function to write Terraform configuration to file
async function writeTerraformConfig() {
  try {
    // Write Terraform configuration to a temporary file
    await fs.writeFile('main.tf', JSON.stringify(terraformConfig));
    console.log('Terraform configuration file (main.tf) written successfully.');

    // Execute Terraform command
    const terraformCommand = 'terraform init && terraform apply -auto-approve';
    exec(terraformCommand, (error , result) => {
      if (error) {
        console.error(`Error executing Terraform command: ${error}`);
        return;
      }
      console.log(`Terraform command executed successfully.`);
      
    });
  } 
  }


// Invoke the function to create S3 bucket using Terraform
writeTerraformConfig();






// Set AWS credentials and region programmatically
// AWS.config.update({
//   accessKeyId : process.env.AWS_ACCESS_KEY,
//   secretAccessKey : process.env.AWS_SECRETE_KEY,
//   region : 'ap-southeast-1' // Replace with your desired AWS region
// });


// resource "aws_s3_bucket" "example" {
//   bucket = "my-s3-bucket-from-terraform-script-executed-by-node-js"

//   tags = {
//     Name        = "my-s3-bucket-from-terraform-script-executed-by-node-js"
//   }
// }
