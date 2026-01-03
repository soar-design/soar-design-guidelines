import { Button } from '@soar-design/soar-react-components';
import { ScrollArea } from '@soar-design/soar-react-components';
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@soar-design/soar-react-components';
import { useDirection } from '@radix-ui/react-direction';

export default function DemoSheet() {
  const direction = useDirection();

  const faqSections = [
    {
      title: 'Account Management',
      content:
        'Navigate to the registration page, provide the required information, and verify your email address. You can sign up using your email or through social media platforms.',
    },
    {
      title: 'Payment and Billing',
      content:
        'We accept all major credit cards, PayPal, and bank transfers. If you face issues, check your payment details or contact our support team.',
    },
    {
      title: 'Subscription Plans',
      content:
        'Choose a plan that fits your needs. Upgrade, downgrade, or cancel at any time from the subscription settings page in your account.',
    },
    {
      title: 'Technical Support',
      content:
        'Our support team is available 24/7 via live chat or email. Check our Help Center for troubleshooting guides and tips.',
    },
    {
      title: 'Privacy and Security',
      content:
        'Your data is encrypted and stored securely. We comply with GDPR and other privacy regulations to protect your information.',
    },
    {
      title: 'Feature Requests',
      content:
        'Got ideas for new features? Submit your request via the feedback form in the app or reach out to us directly.',
    },
    {
      title: 'Refund Policy',
      content:
        "If you're not satisfied with your purchase, you can request a refund within 14 days. Please review our refund policy for more details.",
    },
    {
      title: 'Mobile App Support',
      content:
        'Our platform is fully compatible with iOS and Android devices. Download our app from the App Store or Google Play.',
    },
    {
      title: 'User Roles and Permissions',
      content:
        'Admins can assign roles and permissions to other users. These roles determine the level of access within the platform.',
    },
    {
      title: 'Data Export and Import',
      content:
        'You can export your data at any time from the settings page. We support CSV, JSON, and Excel formats. Import functionality is available for bulk operations.',
    },
    {
      title: 'API Access and Integration',
      content:
        'Our RESTful API allows you to integrate our platform with your existing tools. API keys can be generated from your account settings. Full documentation is available in our developer portal.',
    },
    {
      title: 'Two-Factor Authentication',
      content:
        'Enable 2FA for enhanced security. We support authenticator apps like Google Authenticator and Authy, as well as SMS-based verification.',
    },
    {
      title: 'Team Collaboration',
      content:
        'Invite team members and collaborate in real-time. Share projects, assign tasks, and communicate through our built-in messaging system.',
    },
    {
      title: 'Custom Branding',
      content:
        'Personalize your workspace with custom logos, colors, and themes. White-label options are available for enterprise customers.',
    },
    {
      title: 'Workflow Automation',
      content:
        'Create automated workflows to streamline your processes. Use our visual workflow builder or write custom scripts using our API.',
    },
    {
      title: 'Reporting and Analytics',
      content:
        'Access comprehensive reports and analytics dashboards. Export data, create custom reports, and schedule automated email reports.',
    },
    {
      title: 'Data Backup and Recovery',
      content:
        'Your data is automatically backed up daily. You can restore from any backup point within the last 30 days from your account settings.',
    },
    {
      title: 'Browser Compatibility',
      content:
        'Our platform works best on Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for optimal performance.',
    },
    {
      title: 'Keyboard Shortcuts',
      content:
        'Speed up your workflow with keyboard shortcuts. Press Ctrl+K (Cmd+K on Mac) to see all available shortcuts and customize them to your preference.',
    },
    {
      title: 'Third-Party Integrations',
      content:
        'Connect with popular tools like Slack, Microsoft Teams, Google Workspace, and more. Browse our integrations marketplace for available connectors.',
    },
    {
      title: 'Performance Optimization',
      content:
        'For best performance, ensure you have a stable internet connection. Clear your browser cache regularly and disable unnecessary browser extensions.',
    },
    {
      title: 'Account Limits and Quotas',
      content:
        'Free plans include basic features with limited storage. Upgrade to a paid plan for increased limits, priority support, and advanced features.',
    },
    {
      title: 'Email Notifications',
      content:
        'Customize your email notification preferences from the settings page. Choose which events trigger notifications and set quiet hours.',
    },
    {
      title: 'Search and Filtering',
      content:
        'Use our powerful search to find anything quickly. Advanced filters help you narrow down results by date, type, status, and more.',
    },
    {
      title: 'Accessibility Features',
      content:
        'Our platform is designed with accessibility in mind. We support screen readers, keyboard navigation, and comply with WCAG 2.1 AA standards.',
    },
    {
      title: 'System Requirements',
      content:
        'No special software installation required. Our platform runs entirely in your browser. Minimum requirements: 4GB RAM and a modern web browser.',
    },
    {
      title: 'Troubleshooting Common Issues',
      content:
        'If you experience issues, try clearing your browser cache, disabling extensions, or using an incognito window. Contact support if problems persist.',
    },
    {
      title: 'Best Practices',
      content:
        'Regularly review your account settings, keep your contact information updated, and enable security features like 2FA for better protection.',
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent className="p-0" dir={direction}>
        <SheetHeader className="py-4 px-5 border-b border-border">
          <SheetTitle>Quick Help</SheetTitle>
          <SheetDescription>Frequently Asked Questions(FAQ)</SheetDescription>
        </SheetHeader>
        <SheetBody className="py-0 px-5 grow">
          <ScrollArea className="text-sm h-[calc(100dvh-190px)] pe-3 -me-3">
            <div className="space-y-4 [&_h3]:font-semibold [&_h3]:text-foreground">
              {faqSections.map((faq, index) => (
                <div key={index} className="text-accent-foreground space-y-1">
                  <h3>{faq.title}</h3>
                  <p>{faq.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </SheetBody>
        <SheetFooter className="py-4 px-5 border-t border-border">
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit">Submit Feedback</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

