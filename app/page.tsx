"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { players, features } from "@/lib/players";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 p-8 font-sans dark:bg-black">
      <Tabs defaultValue={players[0].label}>
        <TabsList className="border border-zinc-300 bg-zinc-200 p-1 gap-1 dark:border-zinc-700 dark:bg-zinc-800">
          {players.map(({ label }) => (
            <TabsTrigger
              key={label}
              value={label}
              className="border border-transparent data-active:border-zinc-400 dark:data-active:border-zinc-500"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {players.map(({ label, href, description, pros, cons, links }) => (
          <TabsContent key={label} value={label}>
            <div className="mt-4 rounded-xl border bg-white p-6 shadow-sm dark:bg-zinc-900">
              <h2 className="text-xl font-bold">{label}</h2>
              {description.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {description.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {pros.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-green-600">Pros</h3>
                    <ul className="mt-2 space-y-1">
                      {pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="mt-0.5 text-green-500">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {cons.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-red-600">Cons</h3>
                    <ul className="mt-2 space-y-1">
                      {cons.map((con) => (
                        <li
                          key={con}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="mt-0.5 text-red-400">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {href !== "/" && (
                <div className="mt-6 border-t pt-4">
                  <h3 className="font-semibold">Demo</h3>
                  <a
                    href={href}
                    className="mt-1 inline-block text-sm text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400"
                  >
                    Open {label} demo
                  </a>
                </div>
              )}
              <div className="mt-6 border-t pt-4">
                <h3 className="font-semibold">Links</h3>
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="mt-1 inline-block text-sm text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400"
                    >
                      {label}: {href}
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Feature Matrix</h2>
        <div className="rounded-xl border bg-white shadow-sm dark:bg-zinc-900">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                {players.slice(0, -1).map(({ label }) => (
                  <TableHead key={label} className="text-center">
                    {label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map(({ name, support }) => (
                <TableRow key={name}>
                  <TableCell className="font-medium">{name}</TableCell>
                  {players.slice(0, -1).map((_, i) => (
                    <TableCell key={i} className="text-center">
                      {support[i] === 1 ? (
                        <span className="text-green-500 font-bold">✓</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
