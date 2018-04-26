#
# マスタ系のデータ投入用のDML定義ファイル
#
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ALLOW_INVALID_DATES';

USE `front` ;

# テーブルのダンプ sample
# ------------------------------------------------------------
INSERT INTO `list` (`id`, `name`, `image_url`)
VALUES
    (1,'sample1','/sample1'),
    (2,'sample2','/sample2'),
    (3,'sample3','/sample3'),
    (4,'sample4','/sample4'),
    (5,'sample5','/sample5');

SET SQL_MODE=@OLD_SQL_MODE;
