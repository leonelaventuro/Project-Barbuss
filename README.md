# JAMStack Gridsome

This template should help you get up and running a JAMStack website.

## VS Code Configuration

Install the following extensions:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)


## CI / CD Configuration

You should add the following variables to the CI/CD configuration:

* `APP_ID`: Your GitLab app id for NetlifyCMS.
* `PROJECT_NAME`: Project name.
* `PROD_URL`: Production URL.

### With branch deployments

Add the following variables:

* `DEV_SSH_IP`: IP Address (or domain) of the dev env server.
* `DEV_SSH_KEY`: RSA SSH Key for the dev env server.
* `DEV_SSH_USER`: SSH User for the dev env server.
* `DEV_URL`: URL for the dev envs.

### With master deployment via FTP

Add the following variables:

* `PROD_FTP_IP`: IP Address (or domain) of the FTP Server.
* `PROD_FTP_USER`: FTP User.
* `PROD_FTP_PASSWORD`: FTP Password.
* `PROD_FTP_FOLDER`: Folder to put the files in.

### With master deployment to AWS

We will create:
* A S3 Bucket for the apex domain.
* A S3 Bucket Redirect for the www domain.
* A CloudFront distribution.
* www Route 53 Record.
* @ Route 53 Record.

Add the following variables:

* `PROD_AWS_ACCESS_KEY_ID`: AWS Access Key ID.
* `PROD_AWS_SECRET_ACCESS_KEY`: AWS Secret Access Key.

### With master deployment to GitLab Pages

Remember to set GitLab Pages visibility to Everyone.