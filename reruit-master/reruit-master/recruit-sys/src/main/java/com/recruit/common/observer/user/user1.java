package com.recruit.common.observer.user;

import com.recruit.common.observer.Observer;
import com.recruit.common.util.SingleUtil;
import lombok.Data;

/**
* @Author Min
*
* 观察者子类——user1用户
*/
@Data
public class user1 extends Observer {

    /**
     * 观察者名字
     */
    public String name = "user1";

    @Override
    public void update() {
        // 根据message和name存一条记录到全局map中：messageMap
        SingleUtil.messageMap.put(name, message);
    }
}