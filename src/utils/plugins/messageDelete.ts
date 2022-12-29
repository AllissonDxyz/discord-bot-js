export default function MessageDelete(msg, time, msga) {
	try {
        if(!time) {
            setTimeout(() => {
                msg.delete().catch(err => err);
            }, 15000);
        } else {
            if(time.length > 15) {
                const filter = async(msg) => await msg.author.id === time;
                const collector = msg.channel.createMessageCollector({filter, max: 1});

                collector.on("collect", async(msga) => {
                    if(msga.author.id === time) {
                        msg.delete().catch(err => err);
                    }
                });
            } else {
                if(msga) {
                    msga.delete().catch(err => err);
                }
                setTimeout(() => {
                    msg.delete().catch(err => err);
                }, time);
            }
        }
    } catch(err) {
        return;
    }
}