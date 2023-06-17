import React from "react";
import classNames from "classnames";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import styles from "./styles.module.scss";

const AccordionItem = React.forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Item
      ref={forwardedRef}
      className={classNames(styles["item"], className)}
      {...props}
    >
      {children}
    </RadixAccordion.Item>
  )
);

const AccordionTrigger = React.forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        className={classNames(styles["trigger"], className)}
        ref={forwardedRef}
        {...props}
      >
        {children}
        <ChevronDownIcon className={styles["chevron-down"]} aria-hidden />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
);

const AccordionContent = React.forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Content
      className={classNames(styles["content"], className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </RadixAccordion.Content>
  )
);

const Accordion = () => {
  return (
    <RadixAccordion.Root
      className={styles["root"]}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It's unstyled by default, giving you freedom over the look and
          feel.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </RadixAccordion.Root>
  );
};

export default Accordion;
