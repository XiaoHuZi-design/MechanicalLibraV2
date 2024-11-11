import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cpu, Heart, Star, Music, Settings } from 'lucide-react';
import { FaInstagram, FaTwitter, FaGithub, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

const MechanicalLibra = () => {
  const [showSetting4, setShowSetting4] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState('bg-gradient-to-br from-pink-100 to-purple-200');
  const [clickCount, setClickCount] = useState(0);
  const [showTease, setShowTease] = useState(false);
  const [teaseTimeout, setTeaseTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleSetting4 = () => setShowSetting4(!showSetting4);

  const colors = [
    'bg-gradient-to-br from-pink-100 to-purple-200',
    'bg-gradient-to-br from-blue-100 to-indigo-200',
    'bg-gradient-to-br from-yellow-100 to-orange-200',
    'bg-gradient-to-br from-green-100 to-teal-200',
    'bg-gradient-to-br from-red-100 to-pink-200',
  ];

  const handleGreetClick = () => {
    setClickCount(prevCount => prevCount + 1);

    const nextColorIndex = (clickCount % colors.length);
    setBgColor(colors[nextColorIndex]);

    if (clickCount >= 4) {
      setShowTease(true);

      if (teaseTimeout) {
        clearTimeout(teaseTimeout);
      }
      const timeout = setTimeout(() => {
        setShowTease(false);
      }, 3000);
      setTeaseTimeout(timeout);
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800' : bgColor} flex p-4 transition duration-500`}>
      <main className="ml-80 flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6"
        >
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="bg-blue-500 rounded-full p-3"
            >
              <Cpu size={48} className="text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-gray-800">机械仔libra</h1>
          
          <p className="text-center text-gray-600">
            嗨！我是一个可爱的机械仔。我喜欢音乐、星星和所有美好的事物！
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.div whileHover={{ scale: 1.2 }} className="text-red-500">
              <Heart />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="text-yellow-500">
              <Star />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="text-green-500">
              <Music />
            </motion.div>
          </div>
          
          <div className="bg-pink-100 rounded-2xl p-4">
            <h2 className="text-xl font-semibold text-pink-800 mb-2">我的爱好</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>弹吉他</li>
              <li>看星星</li>
              <li>编程</li>
              <li>画画</li>
            </ul>
          </div>
          
          <motion.button
            onClick={handleGreetClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300"
          >
            跟我打个招呼吧！
          </motion.button>

          {showTease && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center text-gray-700 font-semibold"
            >
              <p>嘿！你点了这么多次，是不是觉得很有趣呀？</p>
              <p>真是个调皮鬼！</p>
            </motion.div>
          )}

          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-purple-500 hover:text-purple-600 transition duration-300" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-purple-500 hover:text-purple-600 transition duration-300" />
            </a>
            <a href="https://github.com/XiaoHuZi-design" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-purple-500 hover:text-purple-600 transition duration-300" />
            </a>
            <a href="https://www.douyin.com/user/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} className="text-purple-500 hover:text-purple-600 transition duration-300" />
            </a>
          </div>

          <Link href="/video" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 mt-4"
            >
              去观看视频
            </motion.button>
          </Link>
        </motion.div>

        <div className="fixed bottom-4 right-4">
          <audio controls>
            <source src="/music.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </main>

      <div className="fixed top-8 right-8 flex space-x-4">
        <button 
          onClick={toggleDarkMode}
          className="bg-gray-700 text-white p-4 rounded-full shadow-xl hover:bg-gray-800 transition duration-300"
        >
          {isDarkMode ? '🌙 夜猫子模式' : '🌞 白天模式'}
        </button>

        <button 
          onClick={toggleSetting4}
          className="bg-gray-700 text-white p-4 rounded-full shadow-xl hover:bg-gray-800 transition duration-300"
        >
          <Settings size={24} />
        </button>
      </div>

      {showSetting4 && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-3xl p-6 w-96 shadow-xl">
            <h2 className="text-xl font-bold text-center text-gray-800">公众号名片</h2>
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/gzhqrcode.jpg"
                alt="公众号二维码"
                width={96}
                height={96}
                className="rounded-lg"
              />
              <div>
                <p className="text-gray-700">关注我们的公众号</p>
                <p className="text-gray-700">获取更多资讯</p>
              </div>
            </div>
            <button 
              onClick={toggleSetting4} 
              className="w-full mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MechanicalLibra;






