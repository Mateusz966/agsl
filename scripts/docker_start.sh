#!/bin/bash

DOCKER_COMPOSE_PATH="/usr/local/bin/docker-compose"

"$DOCKER_COMPOSE_PATH" -f /agsl/server/docker-compose.yml  up -d --remove-orphans
#!/bin/bash

# Function to check if a command exists
command_exists() {
  type "$1" &> /dev/null
}

# Function to install Docker if not already installed
install_docker() {
  if ! command_exists docker; then
    echo "Installing Docker..."
    sudo yum update -y
    sudo amazon-linux-extras install docker -y
    sudo service docker start
    sudo usermod -a -G docker ec2-user
    echo "Docker installed successfully."
  else
    echo "Docker is already installed."
  fi
}

# Function to install Docker Compose if not already installed
install_docker_compose() {
  if ! command_exists docker-compose; then
    echo "Installing Docker Compose..."
    sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    echo "Docker Compose installed successfully."
  else
    echo "Docker Compose is already installed."
  fi
}

# Function to read environment variables from Parameter Store and set them
read_env_variables_from_parameter_store() {
  echo "Reading environment variables from Parameter Store..."
  # Decrypt secure string parameters
  ENV_VARS=$(aws ssm get-parameter --name "/agsl-server-env" --with-decryption --output text --query Parameter.Value)
  # Set decrypted value as environment variable
  while IFS= read -r line; do
    key=$(echo "$line" | cut -d "=" -f 1)
    value=$(echo "$line" | cut -d "=" -f 2-)
    export "$key"="$value"

    echo "export $key='$value'" >> ~/.bashrc

    echo "Set environment variable $key=$value"
  done <<< "$ENV_VARS"
}

# Main script
echo "Starting script..."

install_docker
install_docker_compose
read_env_variables_from_parameter_store

echo "Setup completed."