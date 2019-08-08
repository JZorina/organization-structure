
DROP TABLE IF EXISTS `hierarchy`;
CREATE TABLE IF NOT EXISTS `hierarchy` (
  `EmpId` int(11) NOT NULL,
  `ManagerId` int(11) NOT NULL,
  PRIMARY KEY (`EmpId`,`ManagerId`)
);

--
-- Dumping data for table `hierarchy`
--

INSERT INTO `hierarchy` (`EmpId`, `ManagerId`) VALUES
(2, 1),
(3, 2),
(4, 3),
(5, 3),
(6, 3),
(7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
CREATE TABLE IF NOT EXISTS `position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`id`, `position`) VALUES
(1, 'CEO'),
(2, 'CTO'),
(3, 'Team Leader'),
(4, 'Developer');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
CREATE TABLE IF NOT EXISTS `report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `text` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`id`, `date`, `text`) VALUES
(1, '2019-08-07', 'we need to talk'),
(18, '2019-08-08', 'whats up?'),
(17, '2019-08-08', 'hi');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` varchar(100) NOT NULL,
  `assignDate` date NOT NULL,
  `dueDate` date NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `task`, `assignDate`, `dueDate`) VALUES
(1, 'say hello', '2019-08-04', '2019-08-30'),
(2, 'say good by', '2019-08-04', '2019-08-29'),
(3, 'save Spider man', '2019-08-04', '2019-08-29'),
(4, 'load web stack', '2019-08-04', '2019-08-29'),
(5, 'swing across New York', '2019-08-04', '2019-08-29'),
(6, 'save the world', '2019-08-08', '2019-08-09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `positionId` int(11) NOT NULL,
  `image` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `positionId`, `image`) VALUES
(1, 'Thanos', '', 1, 'https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/c1.0.747.747a/s320x320/67432772_2335105816746957_8862797588391922628_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&oh=332b6caa2befcfd71fc20b1679e02d48&oe=5DD00369&ig_cache_key=MjEwMjU1NzExOTM3MTU1ODA3Nw%3D%3D.2.c'),
(2, 'Captain', 'Marvel', 2, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/captain-marvel-brie-larson-stand-1551890095.jpg'),
(3, 'Iron', 'Man', 3, 'https://i.imgur.com/bh1XpZ9.jpg'),
(4, 'Spider', 'Man', 4, 'https://fsb.zobj.net/crop.php?r=yMmUW8XIEEeh7-5BU34hBpHFyYpqQc7GF0dZ_aklvqSN2-T9Ew-Xd5qiOAzQAH04ArOouRyYS1uoheYxz24K4FN7RBHtbr6QwqC4cgGk_PY4UiK8n1ogLztZfUQ7iu35xRBDqV9mr6abKxRq'),
(5, 'Green', 'Halk', 4, 'https://i.pinimg.com/originals/e5/46/59/e546590470b6d127be4b53ed2ba86cf7.jpg'),
(6, 'Black', 'Widow', 4, 'https://s1.r29static.com//bin/entry/1b5/720x864,85/1996479/image.webp'),
(7, 'Doctor', 'Strange', 4, 'https://pbs.twimg.com/profile_images/817369685192605696/iWkgUdBf_400x400.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user_report`
--

DROP TABLE IF EXISTS `user_report`;
CREATE TABLE IF NOT EXISTS `user_report` (
  `reportId` int(11) NOT NULL,
  `reporterId` int(11) NOT NULL,
  `managerId` int(11) NOT NULL,
  PRIMARY KEY (`reportId`)
);

--
-- Dumping data for table `user_report`
--

INSERT INTO `user_report` (`reportId`, `reporterId`, `managerId`) VALUES
(1, 4, 3),
(18, 2, 1),
(17, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_task`
--

DROP TABLE IF EXISTS `user_task`;
CREATE TABLE IF NOT EXISTS `user_task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `taskId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `user_task`
--

INSERT INTO `user_task` (`id`, `userid`, `taskId`) VALUES
(1, 4, 1),
(2, 4, 2),
(3, 3, 3),
(4, 4, 4),
(5, 4, 5),
(6, 3, 6);

