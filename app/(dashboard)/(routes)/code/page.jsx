'use client';

import BotAvatar from '@/components/bot-avatar';
import Empty from '@/components/empty';
import Heading from '@/components/heading';
import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import UserAvatar from '@/components/user-avatar';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Code } from 'lucide-react';
import { useRouter } from 'next/navigation';
import OpenAI from 'openai';
import { ChatCompletion } from 'openai/resources/index.mjs';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import * as z from 'zod';
import { formSchema } from './constants';

const CodePage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values) => {
    try {
      const userMessage = {
        role: 'user',
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];
      const response = await axios.post('/api/code', {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
      // TODO
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Code generation"
        description="Generate code using descriptive text"
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8 ">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Simple toggle button using React Hooks."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted ">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label={'No conversation started'} />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                style={{
                  padding: '2rem' /* p-8 */,
                  width: '100%' /* w-full */,
                  display: 'flex' /* flex */,
                  alignItems: 'flex-start' /* items-start */,
                  gap: '2rem' /* gap-x-8 */,
                  borderRadius: '0.5rem' /* rounded-lg */,
                  backgroundColor:
                    message.role === 'user' ? 'white' : '/* bg-muted color */',
                  border:
                    message.role === 'user'
                      ? '1px solid rgba(0, 0, 0, 0.1)'
                      : 'none' /* border and border-black/10 */,
                }}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  className="text-sm overflow-hidden leading-7"
                  components={{
                    pre: ({ node, ...props }) => (
                      <div
                        style={{
                          overflow: 'auto' /* overflow-auto */,
                          width: '100%' /* w-full */,
                          marginTop:
                            '0.5rem' /* my-2 (top and bottom margin) */,
                          marginBottom:
                            '0.5rem' /* my-2 (top and bottom margin) */,
                          backgroundColor:
                            'rgba(122, 122, 122, 0.1)' /* bg-red/10 */,
                          padding: '0.5rem' /* p-2 */,
                          borderRadius: '0.5rem' /* rounded-lg */,
                        }}
                      >
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        style={{
                          backgroundColor:
                            'rgba(79, 79, 79, 0.1)' /* bg-black/10 */,
                          borderRadius: '0.5rem' /* rounded-lg */,
                          padding: '0.25rem' /* p-1 */,
                        }}
                        {...props}
                      />
                    ),
                  }}
                >
                  {message.content || ''}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
