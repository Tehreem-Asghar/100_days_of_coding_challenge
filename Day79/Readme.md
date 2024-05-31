Day-79 of 100-Days-Of-Code Challenge
Day-79 Task:

Read the following Articles with interactive video about Basics of Authentication and HTTP Basic Authentication.

Basics of Authentication : https://roadmap.sh/guides/basics-of-authentication

HTTP Basic Authentication : https://roadmap.sh/guides/http-basic-authentication


# In this above artical

# Authentication

Authentication is the process of verifying someone's identity. A real-world example of this would be during board exams, where teachers check your admit card. If you have your identity card, you are allowed to take the exam; otherwise, you cannot. Similarly, this process is applied in digital systems to ensure that only authorized users have access.

There are two things you should keep in mind:

* Authentication is not only for the persons
* And username and password are not the only way to authenticate.

# How does Authentication Work?
we have the following factors used for authentication.

# 1- Knowledge Factor (Something you know):

* Username and Password: The most common form of authentication, where a user provides a unique identifier (username) and a secret (password).
* Security Codes, PIN Codes, or Security Questions: These are additional pieces of information that the user knows and can provide when requested. For example, a PIN code entered at an ATM or answers to security questions during account recovery.

# 2- Possession Factor (Something you have):

* Hard Tokens: Physical devices that a user possesses, such as a security key or a smart card, which generate a one-time password (OTP) or provide a cryptographic key for authentication.
* Soft Tokens: Software-based tokens, often delivered through a mobile app or via SMS, which generate or receive an OTP. For instance, a code sent to your smartphone for logging into an online account.

# 3- Inherence Factor (Something you are):

* Biometric Authentication: Uses unique biological traits to verify identity, such as fingerprints, facial recognition, iris scans, or voice recognition so this would be a Qualities factor.

# Multifactor Authentication

Multifactor authentication is a type of authentication where more than one factor is used to authenticate a user. It enhances security by requiring multiple verification methods. 

# Two-Factor Authentication
Two-factor authentication is similar to multifactor authentication. The only difference is that there are precisely two factors in 2FA. In MFA, we can have 2, 3, 4, or any authentication factors; 2FA has exactly two factors. We can say that 2FA is always MFA, because there are more than one factors. MFA is not always 2FA because there may be more than two factors involved.