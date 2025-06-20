"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { z, ZodError } from "zod";
import { Loader, Send } from "lucide-react";

// Zod schema for validation
const contactFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const Contact = () => {
  const contactTitle = "Contact Us";
  const contactDescription =
    "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!";
  const contactEmail = "hello@fdl.com";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  interface FormErrors {
    [key: string]: string | undefined; // keys are field names, values are error messages or undefined
  }

  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission with Zod validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setFormErrors({}); // Reset errors before validation

    try {
      contactFormSchema.parse(formData); // Validate the form data
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const field = err.path[0];
          if (typeof field === "string") {
            formattedErrors[field] = err.message;
          }
        });
        setFormErrors(formattedErrors);
        setFormStatus("error");
        setErrorMessage("Please fix the errors above.");
        return;
      }

      // Optionally handle other errors
      console.error("Unexpected error:", error);
      setFormStatus("error");
      setErrorMessage("Something went wrong.");
    }

    // Prepare form data to submit
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("fullName", formData.fullName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("subject", formData.subject);
    formDataToSubmit.append("message", formData.message);

    // 1. Log the form data before submitting
    console.log("Form data to submit:");
    formDataToSubmit.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    const formspreeUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

    if (!formspreeUrl) {
      setFormStatus("error");
      setErrorMessage("Form submission URL is not configured.");
      return;
    }

    // 2. Log the request URL
    console.log("Formspree request URL:", formspreeUrl);

    // 3. Log the headers
    console.log("Formspree headers:", {
      Accept: "application/json",
    });

    try {
      // Send the request to Formspree
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formDataToSubmit,
        headers: {
          Accept: "application/json",
        },
      });

      // 4. Log the raw response from Formspree
      const responseBody = await response.json();
      console.log("Response from Formspree:", responseBody);

      // Check the response status
      if (response.ok) {
        alert("Your message is on its way!");
        setFormStatus("success");
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
        // Log the error message received from Formspree
        setErrorMessage(
          responseBody.error || "Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      // 5. Log network errors
      console.error("Network error:", error);
      setFormStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {contactTitle}
              </h1>
              <p className="text-muted-foreground">{contactDescription}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${contactEmail}`} className="underline">
                    {contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex md:w-lg max-w-3xl flex-col gap-6 rounded-lg border p-10">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={formErrors.fullName ? "border-red-500" : ""}
                />
                {formErrors.fullName && (
                  <p className="text-red-500 text-sm">{formErrors.fullName}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={formErrors.email ? "border-red-500" : ""}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className={formErrors.subject ? "border-red-500" : ""}
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-sm">{formErrors.subject}</p>
                )}
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className={formErrors.message ? "border-red-500" : ""}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Button>
                  {formStatus === "loading" ? (
                    <Loader className="me-1 animate-spin w-6 h-6" />
                  ) : (
                    <Send className="me-1" />
                  )}
                  {formStatus === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </div>
              {formStatus === "error" && errorMessage && (
                <p className="mt-4 text-center text-red-500">{errorMessage}</p>
              )}
              {formStatus === "success" && (
                <p className="mt-4 text-center text-green-500">
                  Data Saved successfully
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
