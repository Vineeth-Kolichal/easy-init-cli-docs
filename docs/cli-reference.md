---
sidebar_position: 3
---

# CLI Reference

Comprehensive guide to `easy_init_cli` commands.

## Create a New Project

Generate a new Flutter project with a custom organization domain.

```bash
easy create project
```

Follow the prompts to enter your project name and organization domain (e.g., `com.example`).

## Initialize Architecture

Navigate to your project directory and initialize the project structure.

```bash
cd <your_project_name>
easy init
```

You will be prompted to select an architecture. 

- **Clean Architecture**
- **MVVM**
- *More patterns coming soon...*

## Create a Feature

Generate a new feature module following Clean Architecture principles.

```bash
easy create feature
```

Or specify the feature name directly:

```bash
easy create feature:<feature_name>
```

> **Note**: If you name your feature `auth` or `authentication`, the CLI will automatically include authentication-related screen files.

## Create Services

Generate common service helpers and utilities.

```bash
easy create services
```

Available services:
- **FCM Services**: Firebase Cloud Messaging setup.
- **Token Manager**: Secure storage defined token management.
- **Shared Preferences Services**: Shared Preferences helper.

## Run Build Runner

Simplify running the `build_runner` for code generation.

```bash
easy build
```

## Update CLI

Keep your CLI up to date with the latest features and fixes.

```bash
easy update
```
