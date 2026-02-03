---
sidebar_position: 10
---

# Contributing

We welcome contributions to `easy_init_cli`! The goal of this CLI is to be a flexible tool for Flutter projects, and we want to support as many robust architecture patterns as possible.

If you have a preferred architecture pattern that isn't currently supported, we'd love for you to add it.

## 🤝 How to Contribute

### Adding a New Architecture Pattern

1.  **Fork the Repository**
    - Go to the [easycli repository](https://github.com/ashavijit/easycli).
    - Click the "Fork" button to create your own copy of the repository.

2.  **Clone Your Fork**
    ```bash
    git clone https://github.com/your-username/easycli.git
    cd easycli
    ```

3.  **Create a Branch**
    - Create a new branch for your architecture pattern.
    ```bash
    git checkout -b feat/new-architecture-pattern
    ```

4.  **Implement the Pattern**
    - Locate the templates directory in the source code.
    - Create a new folder for your architecture.
    - Add the necessary template files and configuration logic to generate the folder structure and boilerplate code.
    - *Tip: Look at the existing `clean_architecture` implementation for reference.*

5.  **Test Locally**
    - Activate the CLI globally from your source code to test it.
    ```bash
    dart pub global activate --source path .
    ```
    - Run `easy init` in a test project and verify that your new architecture is listed and generates correctly.

6.  **Submit a Pull Request**
    - Push your changes to your forked repository.
    - Go to the original repository and open a Pull Request.
    - Provide a clear description of the architecture you added and why it's beneficial.

### Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/ashavijit/easycli/issues) on GitHub.
