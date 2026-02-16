---
sidebar_position: 2
---

# MVVM Architecture

`easy_init_cli` now supports **MVVM (Model-View-ViewModel)** architecture, providing a clean separation between the user interface and the business logic.

## Feature-Wise Separation

The architecture organizes code by **features** rather than technical layers. Each feature is a self-contained module with its own data, models, viewmodels, and views.

### Advantages

- **Modularity**: Features are independent and can be developed, tested, and maintained in isolation
- **Scalability**: Easy to add new features without affecting existing ones
- **Team Collaboration**: Multiple developers can work on different features simultaneously without conflicts
- **Code Reusability**: Shared utilities and widgets are placed in `common/` for cross-feature use
- **Maintainability**: Changes to one feature don't ripple through the entire codebase
- **Testability**: Each feature can be unit tested independently with clear boundaries

## Project Structure

```text
lib/
├── app.dart                     # Main application widget
├── app_runner.dart              # Application runner configuration
├── main.dart                    # Application entry point
├── common/                      # Reusable components, utilities, and shared logic across features
│   ├── ui_utils/                # Common UI utilities (e.g., SnackBars)
│   └── widgets/                 # Common UI components (GenericButton, CustomTextField, Loading, etc.)
├── core/                        # Core functionalities, infrastructure, and cross-cutting concerns
│   ├── api_endpoints/           # API endpoint definitions
│   ├── config/                  # Application configuration (FlavorConfig)
│   ├── dependency_injection/    # Dependency injection setup (GetIt, Injectable)
│   │   ├── config/              # DI configuration files
│   │   └── modules/             # DI modules (e.g., DioModule)
│   ├── extensions/              # Dart extensions (String, Date, Number, Theme, Navigation)
│   ├── failures/                # Custom failure classes for error handling
│   ├── network/                 # Network client and handling (Dio configuration)
│   ├── routes/                  # Application routing definitions (AutoRoute)
│   ├── services/                # Core services (empty for now)
│   └── theme/                   # Application theme and styling
│       ├── typography/          # Typography system (TextStyles, FontWeights)
│       ├── app_colors.dart      # Color palette definitions
│       ├── app_theme.dart       # Theme configuration
│       └── theme_service.dart   # Theme management service
└── features/                    # Feature-specific modules, each following MVVM architecture
    └── <feature_name>/
        ├── data/                # Data layer (repositories implementation, data sources)
        │   ├── data_sources/    # Remote and local data sources
        │   └── repositories/    # Repository implementations
        ├── models/              # Data models (DTOs, domain models)
        ├── view_model/          # ViewModels for state management (using ChangeNotifier or similar)
        └── view/                # View layer (UI components)
            ├── screens/         # Screens/Pages
            └── widgets/         # UI components specific to the feature
```

> **Note**: While this structure follows MVVM principles, it also incorporates elements of Clean Architecture to ensure scalability and maintainability.

## AI Documentation

The project includes an `/ai_docs` folder in the root directory containing curated guidelines for AI-assisted development:

- **`api_flow_guide.md`** - Comprehensive guide on API call flow, error handling patterns, and network layer best practices
- **`styling_guide.md`** - Styling conventions, theme usage, widget patterns, and UI consistency guidelines

These guides enable **vibe coding** - AI-powered development that maintains consistency with your project's architecture and conventions. When using AI assistants, reference these documents to ensure generated code follows your established patterns.

## Core Packages

The MVVM structure uses the following packages to maintain clean architecture and efficient state management:

### Dependencies

- **`provider`** - State management and dependency injection for ViewModels
- **`injectable`** - Code generation for dependency injection setup
- **`freezed_annotation`** - Annotations for generating immutable models and unions
- **`get_it`** - Service locator for dependency injection
- **`dio`** - HTTP client for API requests
- **`intl`** - Internationalization and localization support
- **`go_router`** - Declarative routing solution

### Dev Dependencies

- **`build_runner`** - Code generation tool runner
- **`freezed`** - Code generator for immutable classes and unions
- **`injectable_generator`** - Code generator for injectable dependency injection
- **`mocktail`** - Mocking library for unit tests

These packages work together to provide:
- **Dependency Injection**: `get_it` and `injectable` handle service registration and retrieval
- **State Management**: `provider` manages ViewModels and UI state
- **Data Models**: `freezed` generates immutable models with copyWith, equality, and toString
- **Networking**: `dio` provides a robust HTTP client with interceptors
- **Routing**: `go_router` enables type-safe, declarative navigation
- **Testing**: `mocktail` allows easy mocking for unit tests
