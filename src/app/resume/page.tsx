import { IconX } from '@tabler/icons-react'

import type { Metadata, Viewport } from 'next'
import Link from 'next/link'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'
import { formatDateTime } from '@/utils'

export const metadata: Metadata = {
  title: 'Resume',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { color: '#282935', media: '(prefers-color-scheme: light)' },
    { color: '#282935', media: '(prefers-color-scheme: dark)' },
  ],
}

export default function Page() {
  const lastBuildTime = formatDateTime(
    {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: 'short',
      second: '2-digit',
      weekday: 'short',
    },
    new Date(),
  )

  return (
    <div className='flex min-h-svh items-center justify-center bg-[#282935] p-4'>
      <main className='flex max-h-[90svh] max-w-prose flex-1 flex-col overflow-hidden rounded-2xl border border-gray-600 shadow-2xl shadow-black'>
        <header className='grid h-11 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-700 px-4 text-xs font-semibold'>
          <span className='flex gap-2'>
            <Link aria-label='Back to home page' href='/'>
              <Dot className='group relative flex items-center justify-center bg-red-500 before:absolute before:-inset-4 before:content-["_"]'>
                <IconX className='invisible size-2.5 group-hover:visible' />
              </Dot>
            </Link>
            <Dot className='cursor-not-allowed bg-yellow-400' />
            <Dot className='cursor-not-allowed bg-green-500' />
          </span>
          <span className='text-center text-gray-400'>me@kemiaosw.top:~</span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>Last login: {lastBuildTime} on Github</p>
          <Typed>
            <TypedText>who am i</TypedText>
            <TypedContent>
              <p>
                Hi, I&apos;am <strong>Ke Miao</strong>, in Chinese my name is{' '}
                <strong>克喵爱吃卤面</strong>.
              </p>
              <p>
                我是一个普通的大二学生，目前在南京就读双非二本学校，专业是自动化，于
                <strong>2023年</strong>开始大学生活，
                于当年在小绿书接触逆向资源，并开始学习逆向工程的相关知识，现在还是菜鸟一个；
                <strong>2024年</strong>受不了小编的小杯操作而转战Telegram；
                在这里获得了不少好用的资源，并在这里认识了众多大佬。在大佬
                <a
                  href='https://t.me/txwl666'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  @txwl666 (资源分享)
                </a>
                和
                <a
                  href='https://t.me/haoruanfenxiang'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  @haoruanfenxiang (好软分享)
                </a>
                这些大佬的指引下，于<strong>24年11月</strong>
                开始了我的资源分享之旅。
              </p>
              <p>
                当月我开始部署博客，我遇到的第一款博客当然是与TG有关的
                <a
                  href='https://github.com/ccbikai/BroadcastChannel'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  博客
                </a>
                后续我陆陆续续尝试了许多种类的博客，并于
                <strong>25年5月11日</strong>搭建了这个博客！
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>ls</TypedText>
            <TypedContent>
              <div className='grid grid-cols-2 gap-2 px-4 font-semibold text-sky-500'>
                <span>资源分享</span>
                <span>我的项目</span>
                <span>博客介绍</span>
                <span>联系</span>
              </div>
            </TypedContent>
            <TypedText afterDelay={700}>opensource</TypedText>
            <TypedContent>
              <p>
                我的资源皆来源于网络，更新的也一般是根据我觉得常用的资源，所以可能更贴近我的圈子，有什么想找的资源可以联系我，看到会找，
                <strong>但不保证能找到</strong>。<strong>开源项目</strong>，承诺
                <strong>不会私自修改任何部分</strong>！
              </p>
              <p>
                我的资源主要在我的telegram频道里：
                <a
                  href='https://t.me/kemiaofx_me'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  我的资源频道
                </a>
                和
                <a
                  href='https://t.me/kemiaosw_me'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  我的软件库
                </a>
                。除了我的频道外，你还可以在我的
                <a
                  href='https://github.com/Kemeow815/kemiaofx'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  仓库
                </a>
                里找到我分享的资源。希望我的项目能帮到你！
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>我的项目</TypedText>
            <TypedContent>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemeow815/kemiaofx'>
                      克喵的资源库
                    </a>
                  </strong>
                </li>
                <li>记录我的资源分享仓库。</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemeow815/HeoMusic'>
                      克喵的网页音乐播放器
                    </a>
                  </strong>
                </li>
                <li>基于HeoMusic的音乐播放器。</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemeow815/blog-v3'>
                      克喵的主博客
                    </a>
                  </strong>
                </li>
                <li>nuxt全栈博客</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemeow815/BroadcastChannel'>
                      克喵的TG说说
                    </a>
                  </strong>
                </li>
                <li>基于BroadcastChannel的TG说说</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemeow815/DailyHot-kemiao'>
                      克喵的今日热榜
                    </a>
                  </strong>
                </li>
                <li>克喵的今日热榜</li>
              </ul>
            </TypedContent>
            <TypedText>博客介绍</TypedText>
            <TypedContent>
              <p>
                这个博客是就nextjs搭建的博客，博客文章在仓库的
                <a
                  href='https://github.com/Kemiaojun/blog-kemiao-zhangyu/discussions'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  discussion
                </a>
                里，我的博客源码在
                <a
                  href='https://github.com/Kemeow815/blog-kemiao'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  这里
                </a>
                。你可以根据作者的
                <a
                  href='https://www.bilibili.com/video/BV15Z421476R/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  B站视频
                </a>
                来部署它。
              </p>
              <p>
                我的博客主要是分享踩坑教程、各类资源和生活记录，转载文章会有标识原链接，如果我的文章侵犯了你的权益，请联系我删除。
                同样，如果我的资源不符合作者的权益，也请联系我删除。
              </p>
            </TypedContent>
            {/* <TypedText>experience</TypedText>
            <TypedContent>
              <p>Until now, I have worked for two companies only.</p>
              <p>
                The first company focused on developing high-performance and
                versatile dialing systems and management platforms for internal
                enterprise use, along with various mini-programs and Apps.
              </p>
              <p>
                The second company specialized in creating visually appealing
                and high-performance e-commerce platforms and Apps for
                cross-border trade.
              </p>
            </TypedContent>
            <TypedText>skills</TypedText>
            <TypedContent>
              <p>
                I excel in <code>JavaScript</code> and <code>TypeScript</code>,
                proficiently utilizing <code>CSS</code> to create visually
                appealing and responsive web pages.
              </p>
              <p>
                I have a deep understanding of <code>React</code> and have
                explored other popular frameworks as well. Currently, my work
                primarily involves using <code>Next.js</code>, and I have
                extensive experience with <code>App Router</code>.
              </p>
              <p>
                In addition to front-end development, I am also familiar with
                backend development using tools such as <code>Prisma</code>,{' '}
                <code>NestJS</code>, and <code>GraphQL</code>.
              </p>
              <p>
                Furthermore, I have experience in mobile App development using
                <code>React Native</code> and <code>SwiftUI</code>.
              </p>
            </TypedContent> */}
            <TypedText>联系</TypedText>
            <TypedContent>
              <div className='my-4 flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Social</p>
                <div className='grid flex-1 grid-cols-2 justify-items-start gap-2'>
                  <a href='https://github.com/Kemeow815'>Github</a>
                  <a href='https://twitter.com/kemiaosw'>Twitter</a>
                  <a href='https://juejin.cn/user/2270912510955849'>掘金</a>
                  <a href='https://t.me/KemiaoJun'>Telegram</a>
                  <a href='https://music.163.com/#/playlist?id=13681647281'>
                    网易云
                  </a>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Email</p>
                <a href='mailto:me@kemiaosw.top'>me@kemiaosw.top</a>
              </div>
            </TypedContent>
          </Typed>
        </div>
      </main>
    </div>
  )
}
