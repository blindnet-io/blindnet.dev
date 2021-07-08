# Introduction

Blindnet offers a simple solution to enable data privacy and compliance with data minimization requirements in various data regulations, including GDPR and CCPA / CPRA. Beyond compliance, blindnet provides software developers with a zero-trust service to minimize the exposure to unnecessary user data and reduce the risk in case of data breaches.  

Blindnet enables protection of your users’ data via SDKs. Blindnet’s infrastructure is built for secured synchronous and asynchronous data transfers. The SDKs offer end-to-end encryption in your web or mobile applications, and are compatible with all available user authentication systems. The user experience does not change when you integrate blindnet.

Blindnet can protect your users’ data (e.g., files, images, documents) both in web applications and in mobile/desktop applications. We provide two solutions, based on whether your application has a web client or not:

| You app clients      | Communication | Solutions
| ----------- | ----------- | ----------- 
| Web app only | web-to-web | [Solution 1: encryption only](./howitworks.md#blindnet_in_web_applications)
| Mixed: web and standalone apps (mobile/desktop) | web-to-web, web-to-standalone, standalone-to-standalone | [Solution 1: encryption only](./howitworks.md#blindnet_in_web_applications)
| Standalone app only (mobile/desktop) | standalone-to-standalone | [Solution 2: encryption and transfers](./howitworks#blindnet_in_mobiledesktop_only_applications) (coming soon)

When using a blindnet SDK in your application, the SDK encrypts and decrypts user data directly on user local machines (e.g, browsers or mobile phones), while managing the encryption keys in the background.


## **Solution 1**: Web applications and mixed applications

Blindnet for web application offers:

- Symmetric encryption of documents (e.g., files, images); document keys are randomly generated and transferred between users with asymmetric key encryption.
- A password-based secure backup of user private keys, which allows users to access their data from different browsers. Thanks to our password splitting function your users still use only one password to access your system and to secure their private keys.
- Data exchange between registered users of your application, and from unregistered to registered users.
- Zero-trust service: no one except senders and intended recipients can read the data.

![Blindnet in web and mixed applications.](img/web_enc_high.svg)
<p align="center">
    Blindnet in web and mixed applications.
</p>

## **Solution 2**: Mobile/desktop only applications (coming soon)

Blindnet SDK is available for your mobile or desktop application, offering:

- A Signal protocol for end-to-end encryption
- Asynchronous and synchronous data transfers, which means that your users do not have to use the system at the same time in order to exchange data
- Data transfer from sender’s to recipient’s device, and secured temporary storage in case of asynchronous transfers
- Private backup of data that users receive from other users, retrievable in case of device loss
- Zero-trust service: no one except senders and intended recipients can read the data or backups.

![Blindnet in mobile/desktop applications.](img/mob_enc_high.svg)
<p align="center">
    Blindnet in mobile/desktop applications.
</p>
