-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 18, 2025 at 02:41 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#FFFFFF',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `color`, `created_at`, `updated_at`) VALUES
(1, 'Database', '#c70000', '2024-07-22 10:42:17', '2024-07-22 10:42:17'),
(2, 'PHP', '#1e00ff', '2025-01-15 05:15:33', '2025-01-15 05:15:33'),
(3, 'Front-End', '#00cc58', '2024-11-03 18:08:54', '2024-11-03 18:08:54'),
(4, 'Back-End', '#454545', '2024-12-10 00:19:41', '2024-12-10 00:19:41'),
(5, 'Testing', '#ff8800', '2025-04-01 07:27:06', '2025-04-01 07:27:06'),
(6, 'DevOps', '#0088ff', '2024-08-18 13:35:09', '2024-08-18 13:35:09'),
(7, 'UX/UI', '#aa00aa', '2024-09-05 04:48:25', '2024-09-05 04:48:25'),
(8, 'API', '#00bbbb', '2024-06-27 16:56:50', '2024-06-27 16:56:50'),
(9, 'Documentation', '#999900', '2025-03-14 19:13:12', '2025-03-14 19:13:12'),
(10, 'Security', '#bb0000', '2024-10-29 02:02:38', '2024-10-29 02:02:38');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(91, '0001_01_01_000000_create_users_table', 1),
(92, '0001_01_01_000001_create_cache_table', 1),
(93, '0001_01_01_000002_create_jobs_table', 1),
(94, '2025_05_12_130844_create_tasks_table', 1),
(95, '2025_05_13_142412_create_categories_table', 1),
(96, '2025_05_13_142420_create_task_category_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('LOxAIb78UCjPyQbCwrL1MyljGs3dulOW3hSUPWuh', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiT2xWd0tnQmU3QUp3aVV1a2RwZUJycHA0bXFsUlprNnE2N1ZYb01BZCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1747579294);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` enum('pending','in_progress','completed','cancelled') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `priority` enum('low','medium','high') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'medium',
  `due_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `user_id`, `name`, `description`, `status`, `priority`, `due_date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Database tables', 'Create a new database table for users.', 'in_progress', 'high', '2025-05-15 19:44:00', '2025-05-15 03:44:24', '2025-05-15 03:48:01', NULL),
(2, 2, 'Deploy laravel site', 'Implement Apache server and configurations.', 'in_progress', 'medium', '2025-05-16 18:48:00', '2025-05-15 03:45:16', '2025-05-15 03:47:42', NULL),
(3, 1, 'Write a stored procedure', 'Create a MySQL procedure to fetch recent orders.', 'in_progress', 'high', '2025-05-20 18:47:00', '2025-05-15 03:47:14', '2025-05-15 03:47:14', NULL),
(4, 2, 'Audit log table', 'Table to track changes to critical data.', 'in_progress', 'high', '2025-05-15 19:48:00', '2025-05-15 03:48:56', '2025-05-15 03:48:56', NULL),
(5, 1, 'API authentication', 'Implement OAuth2 for API endpoints.', 'pending', 'high', '2025-05-17 09:23:00', '2025-05-15 05:01:19', '2025-05-15 05:02:11', NULL),
(6, 1, 'UI redesign', 'Modernize dashboard layout and color scheme.', 'completed', 'medium', '2025-05-18 16:35:00', '2025-05-15 05:10:13', '2025-05-15 05:12:01', NULL),
(7, 2, 'Laravel queue jobs', 'Optimize background jobs for notifications.', 'pending', 'low', '2025-05-19 14:44:00', '2025-05-15 05:13:20', '2025-05-15 05:14:11', NULL),
(8, 2, 'Front-end validation', 'Add JS validation for all forms.', 'in_progress', 'medium', '2025-05-20 10:02:00', '2025-05-15 05:15:23', '2025-05-15 05:16:09', NULL),
(9, 1, 'Error logging', 'Integrate Sentry for error monitoring.', 'completed', 'medium', '2025-05-21 18:44:00', '2025-05-15 05:18:22', '2025-05-15 05:20:10', NULL),
(10, 1, 'Unit tests', 'Increase tests for user module.', 'in_progress', 'high', '2025-05-22 17:09:00', '2025-05-15 05:21:11', '2025-05-15 05:22:17', NULL),
(11, 2, 'Dockerize app', 'Add Dockerfile and docker-compose.', 'pending', 'medium', '2025-05-23 20:16:00', '2025-05-15 05:23:12', '2025-05-15 05:24:01', NULL),
(12, 2, 'Seed data', 'Write factories for test data.', 'completed', 'low', '2025-05-24 15:33:00', '2025-05-15 05:25:21', '2025-05-15 05:26:12', NULL),
(13, 1, 'User profile page', 'Allow users to update their info.', 'pending', 'medium', '2025-05-25 13:42:00', '2025-05-15 05:27:11', '2025-05-15 05:28:08', NULL),
(14, 2, 'Password reset', 'Implement password reset with email.', 'completed', 'high', '2025-05-26 09:44:00', '2025-05-15 05:29:13', '2025-05-15 05:30:04', NULL),
(15, 1, 'API documentation', 'Auto-generate OpenAPI docs.', 'in_progress', 'high', '2025-05-27 18:33:00', '2025-05-15 05:31:20', '2025-05-15 05:32:01', NULL),
(16, 1, 'Optimize queries', 'Improve performance of dashboard queries.', 'pending', 'medium', '2025-05-28 15:24:00', '2025-05-15 08:33:12', '2025-05-15 08:34:19', NULL),
(17, 2, 'Login page UX', 'Redesign login form and animations.', 'completed', 'low', '2025-05-29 14:53:00', '2025-05-15 08:35:10', '2025-05-15 08:36:15', NULL),
(18, 1, 'Add 2FA', 'Implement two-factor authentication.', 'in_progress', 'medium', '2025-05-30 13:52:00', '2025-05-15 08:37:22', '2025-05-15 08:38:09', NULL),
(19, 2, 'Role permissions', 'Add RBAC for user roles.', 'pending', 'high', '2025-05-31 10:33:00', '2025-05-15 08:39:01', '2025-05-15 08:40:12', NULL),
(20, 1, 'Refactor controllers', 'Simplify controller logic.', 'completed', 'low', '2025-06-01 09:44:00', '2025-05-15 08:41:11', '2025-05-15 08:42:09', NULL),
(21, 2, 'Security audit', 'Review app for security issues.', 'in_progress', 'high', '2025-06-02 18:29:00', '2025-05-15 08:43:13', '2025-05-15 08:44:17', NULL),
(22, 1, 'CI/CD integration', 'Setup Github Actions for deploy.', 'pending', 'medium', '2025-06-03 16:12:00', '2025-05-15 08:45:11', '2025-05-15 08:46:08', NULL),
(23, 2, 'Data export', 'Allow users to export their data.', 'completed', 'low', '2025-06-04 14:31:00', '2025-05-15 08:47:12', '2025-05-15 08:48:11', NULL),
(24, 1, 'Session timeout', 'Auto logout after inactivity.', 'in_progress', 'medium', '2025-06-05 13:22:00', '2025-05-15 08:49:13', '2025-05-15 08:50:09', NULL),
(25, 2, 'Dark mode', 'Add dark mode for all users.', 'pending', 'high', '2025-06-06 12:18:00', '2025-05-15 08:51:10', '2025-05-15 08:52:12', NULL),
(26, 1, 'Optimize images', 'Compress and lazy load images.', 'completed', 'medium', '2025-06-07 11:13:00', '2025-05-15 08:53:14', '2025-05-15 08:54:11', NULL),
(27, 2, 'Email templates', 'Create HTML templates for emails.', 'in_progress', 'low', '2025-06-08 18:09:00', '2025-05-15 08:55:12', '2025-05-15 08:56:17', NULL),
(28, 1, 'System notifications', 'Setup in-app notifications.', 'pending', 'high', '2025-06-09 17:14:00', '2025-05-15 08:57:11', '2025-05-15 08:58:08', NULL),
(29, 2, 'Cache policies', 'Implement Redis caching.', 'completed', 'medium', '2025-06-10 16:29:00', '2025-05-15 08:59:19', '2025-05-15 09:00:12', NULL),
(30, 1, 'Accessibility improvements', 'Improve screen reader support.', 'in_progress', 'low', '2025-06-11 15:44:00', '2025-05-15 09:01:13', '2025-05-15 09:02:08', NULL),
(31, 1, 'Session encryption', 'Encrypt all user session data with AES.', 'completed', 'high', '2025-06-12 11:14:00', '2025-06-10 07:01:00', '2025-06-10 09:01:00', NULL),
(32, 2, 'Pagination for orders', 'Add pagination to orders list page.', 'pending', 'medium', '2025-06-13 15:48:00', '2025-06-11 06:21:00', '2025-06-11 07:11:00', NULL),
(33, 1, 'User avatar upload', 'Allow users to upload profile images.', 'in_progress', 'low', '2025-06-14 18:27:00', '2025-06-12 09:45:00', '2025-06-12 10:23:00', NULL),
(34, 2, 'Subscription billing', 'Integrate Stripe for monthly billing.', 'pending', 'high', '2025-06-15 10:30:00', '2025-06-13 08:15:00', '2025-06-13 09:10:00', NULL),
(35, 1, 'Responsive tables', 'Make all data tables mobile-friendly.', 'completed', 'medium', '2025-06-16 13:37:00', '2025-06-14 06:17:00', '2025-06-14 07:05:00', NULL),
(36, 2, 'Custom error pages', 'Design 404/500 error pages.', 'pending', 'low', '2025-06-17 16:08:00', '2025-06-15 07:31:00', '2025-06-15 08:11:00', NULL),
(37, 1, 'Newsletter system', 'Send weekly newsletters to subscribers.', 'in_progress', 'medium', '2025-06-18 19:01:00', '2025-06-16 10:12:00', '2025-06-16 10:55:00', NULL),
(38, 2, 'Multi-language support', 'Add French and German translations.', 'completed', 'high', '2025-06-19 12:21:00', '2025-06-17 11:26:00', '2025-06-17 12:16:00', NULL),
(39, 1, 'Bulk user import', 'Allow admins to upload CSV for users.', 'pending', 'medium', '2025-06-20 18:15:00', '2025-06-18 07:47:00', '2025-06-18 09:02:00', NULL),
(40, 2, 'Profile completeness', 'Show users a profile completion bar.', 'completed', 'low', '2025-06-21 09:40:00', '2025-06-19 06:15:00', '2025-06-19 07:08:00', NULL),
(41, 1, 'GDPR compliance', 'Add cookie consent and privacy policy.', 'in_progress', 'high', '2025-06-22 14:18:00', '2025-06-20 07:12:00', '2025-06-20 08:17:00', NULL),
(42, 2, 'Performance logging', 'Log server response times.', 'pending', 'medium', '2025-06-23 13:03:00', '2025-06-21 09:09:00', '2025-06-21 10:14:00', NULL),
(43, 1, 'File versioning', 'Support version control for uploads.', 'completed', 'high', '2025-06-24 09:57:00', '2025-06-22 08:08:00', '2025-06-22 09:22:00', NULL),
(44, 2, 'API rate limiting', 'Throttle API requests per user.', 'pending', 'medium', '2025-06-25 19:20:00', '2025-06-23 07:03:00', '2025-06-23 08:27:00', NULL),
(45, 1, 'Webhook integration', 'Connect webhooks for third-party apps.', 'completed', 'low', '2025-06-26 15:12:00', '2025-06-24 06:13:00', '2025-06-24 07:09:00', NULL),
(46, 1, 'Dashboard stats', 'Display live business metrics.', 'in_progress', 'medium', '2025-06-27 17:39:00', '2025-06-25 10:41:00', '2025-06-25 11:59:00', NULL),
(47, 2, 'Settings export/import', 'Allow backup and restore of settings.', 'pending', 'high', '2025-06-28 12:45:00', '2025-06-26 07:29:00', '2025-06-26 08:08:00', NULL),
(48, 1, 'User tagging', 'Tag users for segmentation.', 'completed', 'medium', '2025-06-29 10:32:00', '2025-06-27 06:14:00', '2025-06-27 07:11:00', NULL),
(49, 2, 'Sitemap generator', 'Auto-generate XML sitemap.', 'in_progress', 'low', '2025-06-30 13:08:00', '2025-06-28 09:10:00', '2025-06-28 10:05:00', NULL),
(50, 1, 'Slack notifications', 'Alert team via Slack on errors.', 'pending', 'high', '2025-07-01 14:58:00', '2025-06-29 07:09:00', '2025-06-29 08:12:00', NULL),
(51, 2, 'Theme switcher', 'Switch between multiple themes.', 'completed', 'low', '2025-07-02 16:06:00', '2025-06-30 08:10:00', '2025-06-30 09:12:00', NULL),
(52, 1, 'Demo data reset', 'One-click reset demo accounts.', 'pending', 'medium', '2025-07-03 18:13:00', '2025-07-01 07:24:00', '2025-07-01 08:15:00', NULL),
(53, 2, 'Custom roles', 'Allow admin to create custom roles.', 'in_progress', 'high', '2025-07-04 15:25:00', '2025-07-02 10:35:00', '2025-07-02 11:26:00', NULL),
(54, 1, 'Attachment previews', 'Show PDF/image previews in browser.', 'completed', 'medium', '2025-07-05 14:44:00', '2025-07-03 09:21:00', '2025-07-03 10:37:00', NULL),
(55, 2, 'Live chat', 'Add live chat support for users.', 'pending', 'high', '2025-07-06 11:30:00', '2025-07-04 10:19:00', '2025-07-04 11:12:00', NULL),
(56, 1, 'Static assets CDN', 'Serve static files via CDN.', 'in_progress', 'medium', '2025-07-07 13:18:00', '2025-07-05 07:31:00', '2025-07-05 09:08:00', NULL),
(57, 2, 'Custom email sender', 'Allow users to set email sender name.', 'completed', 'low', '2025-07-08 17:22:00', '2025-07-06 06:55:00', '2025-07-06 07:34:00', NULL),
(58, 1, 'User timezone', 'Detect and set user timezone automatically.', 'pending', 'medium', '2025-07-09 15:51:00', '2025-07-07 07:11:00', '2025-07-07 08:41:00', NULL),
(59, 2, 'Webhook logs', 'Display webhook delivery logs.', 'in_progress', 'high', '2025-07-10 12:56:00', '2025-07-08 09:02:00', '2025-07-08 10:39:00', NULL),
(60, 1, 'Support tickets', 'Basic ticketing system for support.', 'pending', 'low', '2025-07-11 09:33:00', '2025-07-09 07:05:00', '2025-07-09 08:15:00', NULL),
(61, 1, 'Form builder integration', 'Integrate a dynamic form builder to backend.', 'cancelled', 'medium', '2025-07-05 12:00:00', '2025-06-30 12:00:00', '2025-06-30 12:30:00', NULL),
(62, 2, 'Optimize Eloquent queries', 'Review and optimize Laravel Eloquent queries.', 'completed', 'high', '2025-07-06 13:00:00', '2025-06-30 13:00:00', '2025-06-30 14:00:00', NULL),
(63, 1, 'CI cache setup', 'Enable caching for GitHub Actions.', 'in_progress', 'low', '2025-07-07 14:00:00', '2025-06-30 14:00:00', '2025-06-30 15:00:00', NULL),
(64, 2, 'Button redesign', 'Update buttons for consistency with new UI kit.', 'cancelled', 'medium', '2025-07-08 10:00:00', '2025-06-30 10:00:00', '2025-06-30 10:30:00', NULL),
(65, 1, 'Dockerfile refactor', 'Refactor Dockerfile for smaller build size.', 'completed', 'high', '2025-07-09 11:00:00', '2025-06-30 11:00:00', '2025-06-30 11:30:00', NULL),
(66, 2, 'Design dashboard cards', 'Design visual cards for the analytics dashboard.', '', 'medium', '2025-07-10 09:00:00', '2025-06-30 09:00:00', '2025-06-30 09:15:00', NULL),
(67, 1, 'Rate limiter middleware', 'Implement rate limiting on API routes.', 'cancelled', 'high', '2025-07-11 15:00:00', '2025-06-30 15:00:00', '2025-06-30 15:45:00', NULL),
(68, 2, 'Landing page animation', 'Add entrance animations to the landing page.', 'in_progress', 'medium', '2025-07-12 17:00:00', '2025-06-30 17:00:00', '2025-06-30 17:30:00', NULL),
(69, 1, 'Database indexing', 'Add indexes to improve performance.', '', 'high', '2025-07-13 16:00:00', '2025-06-30 16:00:00', '2025-06-30 16:20:00', NULL),
(70, 2, 'UI bug fix - modals', 'Fix close button alignment in modals.', 'cancelled', 'low', '2025-07-14 10:00:00', '2025-06-30 10:00:00', '2025-06-30 10:05:00', NULL),
(71, 1, 'Task sorting by priority', 'Enable sorting tasks by priority.', 'in_progress', 'medium', '2025-07-15 14:00:00', '2025-06-30 14:00:00', '2025-06-30 14:30:00', NULL),
(72, 2, 'Redesign login page', 'Improve the login page UI and UX.', 'cancelled', 'medium', '2025-07-16 11:00:00', '2025-06-30 11:00:00', '2025-06-30 11:30:00', NULL),
(73, 1, 'Add user avatars', 'Allow users to upload and display avatars.', '', 'low', '2025-07-17 12:00:00', '2025-06-30 12:00:00', '2025-06-30 12:20:00', NULL),
(74, 2, 'DevOps monitoring alerts', 'Set up CPU/memory alerts in Grafana.', 'cancelled', 'high', '2025-07-18 13:00:00', '2025-06-30 13:00:00', '2025-06-30 13:30:00', NULL),
(75, 1, 'Button hover states', 'Improve hover/focus styles on all buttons.', 'completed', 'low', '2025-07-19 14:00:00', '2025-06-30 14:00:00', '2025-06-30 14:30:00', NULL),
(76, 2, 'Setup CI badge', 'Add GitHub Actions badge to README.', '', 'low', '2025-07-20 15:00:00', '2025-06-30 15:00:00', '2025-06-30 15:15:00', NULL),
(77, 1, 'UX survey', 'Embed UX survey in dashboard footer.', 'cancelled', 'medium', '2025-07-21 16:00:00', '2025-06-30 16:00:00', '2025-06-30 16:25:00', NULL),
(78, 2, 'Dark mode toggle', 'Implement dark mode UI toggle.', 'completed', 'medium', '2025-07-22 17:00:00', '2025-06-30 17:00:00', '2025-06-30 17:45:00', NULL),
(79, 1, 'DevOps Docker healthcheck', 'Add HEALTHCHECK to Docker container.', 'cancelled', 'high', '2025-07-23 18:00:00', '2025-06-30 18:00:00', '2025-06-30 18:10:00', NULL),
(80, 2, 'Favicon update', 'Replace favicon with high-res version.', '', 'low', '2025-07-24 10:00:00', '2025-06-30 10:00:00', '2025-06-30 10:20:00', NULL),
(81, 1, 'Add forgot password', 'Implement password reset via email.', 'in_progress', 'high', '2025-07-25 11:00:00', '2025-06-30 11:00:00', '2025-06-30 11:30:00', NULL),
(82, 2, 'Improve accessibility', 'Make the UI accessible with keyboard navigation.', 'cancelled', 'medium', '2025-07-26 12:00:00', '2025-06-30 12:00:00', '2025-06-30 12:30:00', NULL),
(83, 1, 'Analytics report email', 'Schedule weekly analytics reports.', '', 'medium', '2025-07-27 13:00:00', '2025-06-30 13:00:00', '2025-06-30 13:20:00', NULL),
(84, 2, '404 page redesign', 'Redesign the 404 error page for branding.', 'cancelled', 'low', '2025-07-28 14:00:00', '2025-06-30 14:00:00', '2025-06-30 14:10:00', NULL),
(85, 1, 'DevOps log rotation', 'Configure logrotate for Laravel logs.', 'in_progress', 'high', '2025-07-29 15:00:00', '2025-06-30 15:00:00', '2025-06-30 15:25:00', NULL),
(86, 2, 'Component library audit', 'Audit and remove unused components.', 'cancelled', 'medium', '2025-07-30 16:00:00', '2025-06-30 16:00:00', '2025-06-30 16:40:00', NULL),
(87, 1, 'Session timeout logic', 'Auto-logout inactive users.', '', 'medium', '2025-07-31 17:00:00', '2025-06-30 17:00:00', '2025-06-30 17:30:00', NULL),
(88, 2, 'Mobile responsive fixes', 'Fix overlapping elements on mobile view.', 'completed', 'high', '2025-08-01 18:00:00', '2025-06-30 18:00:00', '2025-06-30 18:20:00', NULL),
(89, 1, 'Onboarding checklist', 'Add onboarding checklist for new users.', 'cancelled', 'medium', '2025-08-02 10:00:00', '2025-06-30 10:00:00', '2025-06-30 10:10:00', NULL),
(90, 2, 'Set up Redis caching', 'Enable Redis for session and cache.', 'in_progress', 'high', '2025-08-03 11:00:00', '2025-06-30 11:00:00', '2025-06-30 11:15:00', NULL),
(91, 1, 'Refactor email service', 'Improve modularity of email handling code.', 'cancelled', 'medium', '2025-06-30 11:15:00', '2025-06-25 08:01:00', '2025-06-25 08:30:00', NULL),
(92, 2, 'Admin panel analytics', 'Add usage metrics to admin dashboard.', 'cancelled', 'high', '2025-07-01 10:44:00', '2025-06-25 09:10:00', '2025-06-25 09:39:00', NULL),
(93, 1, 'Mobile layout fixes', 'Resolve mobile layout issues on profile page.', 'pending', 'low', '2025-07-02 13:20:00', '2025-06-25 10:45:00', '2025-06-25 11:12:00', NULL),
(94, 2, 'Custom 403 page', 'Design a branded 403 error page.', 'completed', 'low', '2025-07-03 12:09:00', '2025-06-25 12:11:00', '2025-06-25 13:01:00', NULL),
(95, 1, 'Form accessibility', 'Improve screen reader support for forms.', 'cancelled', 'medium', '2025-07-04 15:18:00', '2025-06-25 14:10:00', '2025-06-25 14:38:00', NULL),
(96, 2, 'Forgot password SMS', 'Allow SMS reset as an option.', 'in_progress', 'medium', '2025-07-05 17:00:00', '2025-06-25 15:23:00', '2025-06-25 15:50:00', NULL),
(97, 1, 'Server-side validation', 'Enforce strong validation rules.', 'cancelled', 'high', '2025-07-06 18:11:00', '2025-06-25 16:14:00', '2025-06-25 17:00:00', NULL),
(98, 2, 'Maintenance mode', 'Add toggle for maintenance mode.', 'completed', 'low', '2025-07-07 10:48:00', '2025-06-25 17:08:00', '2025-06-25 17:55:00', NULL),
(99, 1, 'Export task list', 'Enable CSV export for tasks.', 'cancelled', 'medium', '2025-07-08 14:40:00', '2025-06-25 18:02:00', '2025-06-25 18:40:00', NULL),
(100, 2, 'Google login', 'OAuth with Google accounts.', 'pending', 'medium', '2025-07-09 13:22:00', '2025-06-25 19:10:00', '2025-06-25 19:59:00', NULL),
(101, 1, 'Add cookie banner', 'Ensure GDPR compliance for cookies.', 'cancelled', 'low', '2025-07-10 16:05:00', '2025-06-25 20:10:00', '2025-06-25 20:38:00', NULL),
(102, 2, 'Terms of Service update', 'Revise ToS and make versioned.', 'cancelled', 'medium', '2025-07-11 15:19:00', '2025-06-26 07:01:00', '2025-06-26 07:39:00', NULL),
(103, 1, 'Auto-save drafts', 'Drafts should auto-save every minute.', 'in_progress', 'medium', '2025-07-12 18:42:00', '2025-06-26 08:03:00', '2025-06-26 08:30:00', NULL),
(104, 2, 'Admin password policy', 'Stronger rules for admin credentials.', 'completed', 'high', '2025-07-13 17:24:00', '2025-06-26 09:12:00', '2025-06-26 09:50:00', NULL),
(105, 1, 'Bulk delete users', 'Allow admins to delete users in batch.', 'cancelled', 'high', '2025-07-14 12:18:00', '2025-06-26 10:08:00', '2025-06-26 10:45:00', NULL),
(106, 2, 'Responsive sidebar', 'Make sidebar responsive for tablets.', 'cancelled', 'medium', '2025-07-15 14:37:00', '2025-06-26 11:00:00', '2025-06-26 11:33:00', NULL),
(107, 1, 'Session history', 'Track user login history.', 'pending', 'low', '2025-07-16 09:25:00', '2025-06-26 12:22:00', '2025-06-26 13:10:00', NULL),
(108, 2, 'Search suggestions', 'Autocomplete for search input.', 'in_progress', 'medium', '2025-07-17 11:44:00', '2025-06-26 13:30:00', '2025-06-26 14:12:00', NULL),
(109, 1, 'Auto-archive tasks', 'Archive inactive tasks after 30 days.', 'cancelled', 'medium', '2025-07-18 17:39:00', '2025-06-26 15:10:00', '2025-06-26 15:51:00', NULL),
(110, 2, 'Language switcher', 'Frontend dropdown for language selection.', 'completed', 'low', '2025-07-19 13:22:00', '2025-06-26 16:05:00', '2025-06-26 16:58:00', NULL),
(111, 1, 'Update footer links', 'Revise footer navigation.', 'cancelled', 'low', '2025-07-20 15:17:00', '2025-06-26 17:10:00', '2025-06-26 17:50:00', NULL),
(112, 2, 'New feature flag system', 'Toggle features via admin panel.', 'pending', 'high', '2025-07-21 12:33:00', '2025-06-26 18:08:00', '2025-06-26 18:49:00', NULL),
(113, 1, 'New team page design', 'Redesign team section layout.', 'cancelled', 'medium', '2025-07-22 10:50:00', '2025-06-26 19:02:00', '2025-06-26 19:48:00', NULL),
(114, 2, 'Analytics cleanup', 'Remove outdated tracking.', 'in_progress', 'medium', '2025-07-23 16:18:00', '2025-06-26 20:20:00', '2025-06-26 20:59:00', NULL),
(115, 1, 'Profile theme selector', 'Let users choose color themes.', 'completed', 'low', '2025-07-24 11:17:00', '2025-06-26 21:10:00', '2025-06-26 21:59:00', NULL),
(116, 2, 'Timezone settings', 'Let users select their timezone.', 'cancelled', 'low', '2025-07-25 14:40:00', '2025-06-27 07:11:00', '2025-06-27 07:55:00', NULL),
(117, 1, 'Role change logs', 'Log when roles are assigned/changed.', 'pending', 'medium', '2025-07-26 09:42:00', '2025-06-27 08:01:00', '2025-06-27 08:45:00', NULL),
(118, 2, 'Dark/light mode toggle', 'Toggle with localStorage support.', 'cancelled', 'medium', '2025-07-27 12:09:00', '2025-06-27 09:01:00', '2025-06-27 09:59:00', NULL),
(119, 1, 'Export audit logs', 'Allow download of security logs.', 'in_progress', 'high', '2025-07-28 13:14:00', '2025-06-27 10:10:00', '2025-06-27 10:45:00', NULL),
(120, 2, 'Notification sound', 'Play sound for new notifications.', 'cancelled', 'low', '2025-07-29 18:03:00', '2025-06-27 11:11:00', '2025-06-27 11:55:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `task_category`
--

CREATE TABLE `task_category` (
  `task_id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task_category`
--

INSERT INTO `task_category` (`task_id`, `category_id`) VALUES
(1, 1),
(3, 1),
(4, 1),
(16, 1),
(29, 1),
(31, 1),
(34, 1),
(53, 1),
(58, 1),
(1, 2),
(2, 2),
(3, 2),
(10, 2),
(12, 2),
(18, 2),
(20, 2),
(23, 2),
(27, 2),
(32, 2),
(39, 2),
(41, 2),
(43, 2),
(49, 2),
(52, 2),
(55, 2),
(57, 2),
(58, 2),
(6, 3),
(8, 3),
(13, 3),
(17, 3),
(25, 3),
(26, 3),
(32, 3),
(33, 3),
(35, 3),
(38, 3),
(40, 3),
(48, 3),
(51, 3),
(54, 3),
(1, 4),
(2, 4),
(4, 4),
(7, 4),
(9, 4),
(11, 4),
(14, 4),
(16, 4),
(18, 4),
(19, 4),
(20, 4),
(22, 4),
(28, 4),
(29, 4),
(42, 4),
(46, 4),
(52, 4),
(53, 4),
(58, 4),
(9, 5),
(10, 5),
(20, 5),
(24, 5),
(27, 5),
(37, 5),
(43, 5),
(46, 5),
(55, 5),
(60, 5),
(2, 6),
(7, 6),
(11, 6),
(21, 6),
(22, 6),
(29, 6),
(34, 6),
(42, 6),
(46, 6),
(47, 6),
(56, 6),
(6, 7),
(8, 7),
(13, 7),
(17, 7),
(25, 7),
(26, 7),
(28, 7),
(30, 7),
(33, 7),
(35, 7),
(36, 7),
(37, 7),
(38, 7),
(40, 7),
(48, 7),
(51, 7),
(54, 7),
(55, 7),
(5, 8),
(15, 8),
(28, 8),
(34, 8),
(37, 8),
(44, 8),
(45, 8),
(50, 8),
(56, 8),
(59, 8),
(3, 9),
(10, 9),
(12, 9),
(14, 9),
(15, 9),
(23, 9),
(25, 9),
(27, 9),
(30, 9),
(33, 9),
(36, 9),
(38, 9),
(39, 9),
(41, 9),
(43, 9),
(45, 9),
(47, 9),
(49, 9),
(54, 9),
(57, 9),
(60, 9),
(5, 10),
(9, 10),
(14, 10),
(18, 10),
(19, 10),
(21, 10),
(24, 10),
(31, 10),
(41, 10),
(44, 10),
(50, 10),
(53, 10),
(59, 10);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Demo', 'demo@task-app.com', NULL, '$2y$12$0gYSBGsL357.br301SGW2.zkeCnUhEg8hIngkXLhEo.AFIf3CrLI2', 'TltGQ1cCIDQaMSDofLB7E0Mus6C5GcLrswA9DpOxs1Ogq9VSg1EcrlZHbxxY', '2025-05-18 11:41:24', '2025-05-18 11:41:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task_category`
--
ALTER TABLE `task_category`
  ADD PRIMARY KEY (`task_id`,`category_id`),
  ADD KEY `task_category_category_id_foreign` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `task_category`
--
ALTER TABLE `task_category`
  ADD CONSTRAINT `task_category_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `task_category_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
