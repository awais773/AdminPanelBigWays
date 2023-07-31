export default {
  header: "Pages",
  children: [
    {
      id: "errors",
      title: "Error Pages",
      icon: "Curved-CloseSquare",
      children: [
        {
          id: "error-404",
          title: "404",
          navLink: "/pages/error-404",
        },
        {
          id: "error-403",
          title: "403",
          navLink: "/pages/error-403",
        },
        {
          id: "error-500",
          title: "500",
          navLink: "/pages/error-500",
        },
        {
          id: "error-503",
          title: "503",
          navLink: "/pages/error-503",
        },
        {
          id: "error-502",
          title: "502",
          navLink: "/pages/error-502",
        },
        {
          id: "maintenance",
          title: "Maintenance",
          navLink: "/pages/maintenance",
        },
        {
          id: "comming-soon",
          title: "Coming Soon",
          navLink: "/pages/coming-soon",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing",
      icon: "Curved-Discount",
      navLink: "/pages/pricing",
    },
    {
      id: "invoice",
      title: "Invoice",
      icon: "Curved-Paper",
      navLink: "/pages/invoice",
    },
    {
      id: "email",
      title: "Email",
      icon: "Curved-Message",
      children: [
        {
          id: "email-hello",
          title: "Hello",
          navLink: "https://yoda.hypeople.studio/yoda-email-template/hello.html",
          target: "_blank",
        },
        {
          id: "email-promotional",
          title: "Promotional",
          navLink: "https://yoda.hypeople.studio/yoda-email-template/promotional.html",
          target: "_blank",
        },
        {
          id: "email-verify",
          title: "Verify",
          navLink: "https://yoda.hypeople.studio/yoda-email-template/verify.html",
          target: "_blank",
        },
        {
          id: "email-reset-password",
          title: "Reset Password",
          navLink: "https://yoda.hypeople.studio/yoda-email-template/reset-password.html",
          target: "_blank",
        },
        {
          id: "email-term",
          title: "Term",
          navLink: "https://yoda.hypeople.studio/yoda-email-template/term.html",
          target: "_blank",
        },
        {
          id: "email-deactive-account",
          title: "Deactive Account",
          navLink: "https://yoda.hypeople.studio/yoda-email-template/deactive-account.html",
          target: "_blank",
        },
      ],
    },
    {
      id: "faq",
      title: "FAQ",
      icon: "Curved-InfoSquare",
      navLink: "/pages/faq",
    },
    {
      id: "knowledge-base",
      title: "Knowledge Base",
      icon: "Curved-Bookmark",
      children: [
        {
          id: "knowledge-base-1",
          title: "Knowledge Base 1",
          navLink: "/pages/knowledge-base/knowledge-base-1",
        },
        {
          id: "knowledge-base-2",
          title: "Knowledge Base 2",
          navLink: "/pages/knowledge-base/knowledge-base-2",
        },
      ],
    },
    {
      id: "blank-page",
      title: "Blank Page",
      icon: "Curved-PaperPlus",
      navLink: "/pages/blank-page",
    },
    {
      id: "authentication",
      title: "Authentication",
      icon: "Curved-Unlock",
      children: [
        {
          id: "login-page",
          title: "Login Page",
          navLink: "/pages/authentication/login",
        },
        {
          id: "register-page",
          title: "Register Page",
          navLink: "/pages/authentication/register",
        },
        {
          id: "recover-password",
          title: "Recover Password",
          navLink: "/pages/authentication/recover-password",
        },
        {
          id: "reset-password",
          title: "Reset Password",
          navLink: "/pages/authentication/reset-password",
        },
      ],
    },
    {
      id: "lock-page",
      title: "Lock Screen",
      icon: "Curved-Password",
      children: [
        {
          id: "welcome",
          title: "Welcome",
          navLink: "/pages/welcome",
        },
        {
          id: "password-is-changed",
          title: "Password Is Changed",
          navLink: "/pages/password-is-changed",
        },
        {
          id: "deactivated",
          title: "Deactivated",
          navLink: "/pages/deactivated",
        },
        {
          id: "lock",
          title: "Lock",
          navLink: "/pages/lock",
        },
      ],
    },
  ]
}