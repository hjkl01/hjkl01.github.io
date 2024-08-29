# ollama

### [docker-compose.yml](https://hub.docker.com/r/ollama/ollama)

[Github](https://github.com/ollama/ollama)

```shell
version: '3.9'
services:

    ollama:
        image: ollama/ollama
        container_name: ollama
        environment:
            - OLLAMA_ORIGINS=*
        ports:
            - '11434:11434'
        volumes:
            - './data/ollama:/root/.ollama'

    fmaclen:
        image: 'ghcr.io/fmaclen/hollama:latest'
        ports:
            - '4173:4173'
```
